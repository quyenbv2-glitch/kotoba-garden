import { useState, useEffect, useCallback } from "react";
import { Word, UserWordProgress, ReviewMode } from "../types/kotoba";
import { computeSRSReview, calculateXP } from "../utils/srsCalculator";
import { updateWordProgress, getWordProgress } from "../services/progressService";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription } from "./ui/alert";
import { confetti } from "canvas-confetti";

interface ReviewSessionProps {
  mode: ReviewMode;
  words: Word[];
  progress: UserWordProgress[];
  uid: string;
  onComplete: (results: { wordId: string; quality: number }[]) => void;
  onClose: () => void;
}

/**
 * Chế độ 1: Planting - Học từ mới
 */
function PlantingMode({ words, progress, uid, onComplete, onClose }: ReviewSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [results, setResults] = useState<{ wordId: string; quality: number }[]>([]);

  const currentWord = words[currentIndex];
  const currentProgress = progress.find((p) => p.wordId === currentWord?.id);

  const handleAnswer = async (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (!currentWord) return;

    const srsResult = await updateWordProgress(uid, currentWord.id, currentWord.courseId, { quality });
    setResults((prev) => [...prev, { wordId: currentWord.id, quality }]);

    // Hiệu ứng confetti khi đúng
    if (quality >= 3) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10B981", "#22C55E", "#16A34A"],
      });
    }

    // Chuyển sang từ tiếp theo
    if (currentIndex < words.length - 1) {
      setShowAnswer(false);
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete(results);
      onClose();
    }
  };

  if (!currentWord) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">🌱</div>
          <h3 className="text-2xl font-bold mb-2">Hoàn thành!</h3>
          <p className="text-gray-500 mb-6">Bạn đã học xong tất cả từ mới</p>
          <Button onClick={onClose} className="w-full">
            Đóng
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Từ {currentIndex + 1} / {words.length}</span>
            <span>{Math.round(((currentIndex + 1) / words.length) * 100)}%</span>
          </div>
          <Progress value={((currentIndex + 1) / words.length) * 100} className="h-2" />
        </div>

        {/* Word Card */}
        <div className="text-center space-y-6">
          {/* Kanji */}
          <div className="text-6xl font-bold text-gray-800 mb-2">{currentWord.kanji}</div>

          {/* Kana & Romaji */}
          <div className="text-2xl text-gray-600 mb-1">{currentWord.kana}</div>
          <div className="text-lg text-gray-400 mb-4">{currentWord.romaji}</div>

          {/* Meaning */}
          <div className="text-xl font-medium text-gray-800 mb-2">{currentWord.meaning}</div>
          {currentWord.hanViet && (
            <div className="text-sm text-gray-500 mb-4">Hán-Việt: {currentWord.hanViet}</div>
          )}

          {/* Mnemonic */}
          {currentWord.textMnemonic && (
            <Alert className="bg-emerald-50 border-emerald-200">
              <AlertDescription className="text-emerald-800">
                💡 <strong>Mẹo nhớ:</strong> {currentWord.textMnemonic}
              </AlertDescription>
            </Alert>
          )}

          {/* Example */}
          {currentWord.exampleSentence && (
            <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg">
              <div className="font-medium">{currentWord.exampleSentence.jp}</div>
              <div className="text-gray-500">{currentWord.exampleSentence.reading}</div>
              <div className="text-gray-400">{currentWord.exampleSentence.vi}</div>
            </div>
          )}

          {/* Actions */}
          {!showAnswer ? (
            <Button
              onClick={() => setShowAnswer(true)}
              className="w-full text-lg py-4"
              size="lg"
            >
              Xem đáp án
            </Button>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="destructive"
                onClick={() => handleAnswer(0)}
                className="h-12"
              >
                Quên hoàn toàn
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleAnswer(1)}
                className="h-12"
              >
                Quên
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleAnswer(2)}
                className="h-12"
              >
                Khó
              </Button>
              <Button
                onClick={() => handleAnswer(3)}
                className="h-12"
              >
                Được
              </Button>
              <Button
                onClick={() => handleAnswer(4)}
                className="h-12"
              >
                Dễ
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleAnswer(5)}
                className="h-12"
              >
                Rất dễ
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Chế độ 2: Multiple Choice Quiz
 */
function QuizMode({ words, progress, uid, onComplete, onClose }: ReviewSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<Word[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<{ wordId: string; quality: number }[]>([]);

  const currentWord = words[currentIndex];
  const currentProgress = progress.find((p) => p.wordId === currentWord?.id);

  // Tạo options ngẫu nhiên
  useEffect(() => {
    if (!currentWord) return;
    const otherWords = words.filter((w) => w.id !== currentWord.id);
    const shuffled = [...otherWords].sort(() => Math.random() - 0.5);
    const selected = [currentWord, ...shuffled.slice(0, 3)].sort(() => Math.random() - 0.5);
    setOptions(selected);
    setSelectedOption(null);
    setShowResult(false);
  }, [currentWord, words]);

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setShowResult(true);
  };

  const handleNext = async () => {
    if (!currentWord || selectedOption === null) return;

    const isCorrect = selectedOption === currentWord.id;
    const quality = isCorrect ? 4 : 1;

    const srsResult = await updateWordProgress(uid, currentWord.id, currentWord.courseId, { quality });
    setResults((prev) => [...prev, { wordId: currentWord.id, quality }]);

    if (isCorrect) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#10B981", "#22C55E"],
      });
    }

    if (currentIndex < words.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete(results);
      onClose();
    }
  };

  if (!currentWord) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold mb-2">Hoàn thành!</h3>
          <Button onClick={onClose} className="w-full">
            Đóng
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Câu {currentIndex + 1} / {words.length}</span>
            <span>{Math.round(((currentIndex + 1) / words.length) * 100)}%</span>
          </div>
          <Progress value={((currentIndex + 1) / words.length) * 100} className="h-2" />
        </div>

        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-gray-800 mb-2">{currentWord.kanji}</div>
          <div className="text-xl text-gray-600">{currentWord.kana}</div>
          <div className="text-gray-400">{currentWord.romaji}</div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => (
            <Button
              key={option.id}
              variant={showResult
                ? option.id === currentWord.id
                  ? "default"
                  : option.id === selectedOption
                  ? "destructive"
                  : "outline"
                : "outline"
              }
              onClick={() => !showResult && handleSelect(option.id)}
              className="h-16 text-left justify-start"
              disabled={showResult}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.kanji}</span>
                <div>
                  <div className="font-medium">{option.meaning}</div>
                  <div className="text-sm text-gray-500">{option.kana} ({option.romaji})</div>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {showResult && (
          <Button onClick={handleNext} className="w-full mt-4" size="lg">
            {currentIndex < words.length - 1 ? "Câu tiếp theo" : "Hoàn thành"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * Chế độ 3: Typing Test
 */
function TypingMode({ words, progress, uid, onComplete, onClose }: ReviewSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [results, setResults] = useState<{ wordId: string; quality: number }[]>([]);

  const currentWord = words[currentIndex];
  const currentProgress = progress.find((p) => p.wordId === currentWord?.id);

  const checkAnswer = () => {
    if (!currentWord) return;
    const correct = currentWord.kana.toLowerCase() === userInput.trim().toLowerCase() ||
      currentWord.romaji.toLowerCase() === userInput.trim().toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = async () => {
    if (!currentWord) return;

    const quality = isCorrect ? 4 : 1;
    await updateWordProgress(uid, currentWord.id, currentWord.courseId, { quality });
    setResults((prev) => [...prev, { wordId: currentWord.id, quality }]);

    if (isCorrect) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#10B981", "#22C55E"],
      });
    }

    setUserInput("");
    setShowResult(false);

    if (currentIndex < words.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete(results);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!showResult) {
        checkAnswer();
      } else {
        handleNext();
      }
    }
  };

  if (!currentWord) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">⌨️</div>
          <h3 className="text-2xl font-bold mb-2">Hoàn thành!</h3>
          <Button onClick={onClose} className="w-full">
            Đóng
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Từ {currentIndex + 1} / {words.length}</span>
            <span>{Math.round(((currentIndex + 1) / words.length) * 100)}%</span>
          </div>
          <Progress value={((currentIndex + 1) / words.length) * 100} className="h-2" />
        </div>

        <div className="text-center mb-6">
          <div className="text-xl text-gray-500 mb-2">Nghĩa tiếng Việt:</div>
          <div className="text-2xl font-bold text-gray-800">{currentWord.meaning}</div>
          {currentWord.hanViet && (
            <div className="text-sm text-gray-500 mt-1">Hán-Việt: {currentWord.hanViet}</div>
          )}
        </div>

        {!showResult ? (
          <div className="space-y-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Gõ Hiragana hoặc Romaji..."
              autoFocus
              className="w-full px-4 py-3 text-center text-xl border-2 border-gray-200 rounded-lg focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />
            <Button onClick={checkAnswer} className="w-full" size="lg" disabled={!userInput.trim()}>
              Kiểm tra
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
              <div className="text-center">
                <div className="text-3xl mb-2">{isCorrect ? "✅" : "❌"}</div>
                <div className="text-xl font-medium">
                  {isCorrect ? "Chính xác!" : "Sai rồi!"}
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div>
                  <span className="font-medium">Đáp án: </span>
                  <span className="text-emerald-600">{currentWord.kana}</span>
                  <span className="text-gray-400 ml-2">({currentWord.romaji})</span>
                </div>
                <div>
                  <span className="font-medium">Bạn nhập: </span>
                  <span className={isCorrect ? "text-emerald-600" : "text-red-600"}>{userInput}</span>
                </div>
              </div>
            </div>
            <Button onClick={handleNext} className="w-full" size="lg">
              {currentIndex < words.length - 1 ? "Tiếp theo" : "Hoàn thành"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * Chế độ 4: Speed Review
 */
function SpeedReviewMode({ words, progress, uid, onComplete, onClose }: ReviewSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(true);
  const [results, setResults] = useState<{ wordId: string; quality: number }[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentWord = words[currentIndex];
  const currentProgress = progress.find((p) => p.wordId === currentWord?.id);

  // Timer
  useEffect(() => {
    if (!isActive || !currentWord) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isActive, currentWord]);

  const handleTimeUp = async () => {
    if (!currentWord) return;
    setIsActive(false);
    setShowResult(true);
    setIsCorrect(false);

    await updateWordProgress(uid, currentWord.id, currentWord.courseId, { quality: 1 });
    setResults((prev) => [...prev, { wordId: currentWord.id, quality: 1 }]);

    setTimeout(() => {
      if (currentIndex < words.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setTimeLeft(10);
        setIsActive(true);
        setShowResult(false);
      } else {
        onComplete(results);
        onClose();
      }
    }, 1500);
  };

  const handleAnswer = async (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (!currentWord) return;
    setIsActive(false);
    setShowResult(true);
    setIsCorrect(quality >= 3);

    await updateWordProgress(uid, currentWord.id, currentWord.courseId, { quality });
    setResults((prev) => [...prev, { wordId: currentWord.id, quality }]);

    if (quality >= 3) {
      confetti({
        particleCount: 20,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#10B981", "#22C55E"],
      });
    }

    setTimeout(() => {
      if (currentIndex < words.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setTimeLeft(10);
        setIsActive(true);
        setShowResult(false);
      } else {
        onComplete(results);
        onClose();
      }
    }, 1000);
  };

  if (!currentWord) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold mb-2">Hoàn thành!</h3>
          <Button onClick={onClose} className="w-full">
            Đóng
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        {/* Timer */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Câu {currentIndex + 1} / {words.length}</span>
            <div className={`text-2xl font-bold ${timeLeft <= 3 ? "text-red-500" : "text-emerald-600"}`}>
              ⏱️ {timeLeft}s
            </div>
          </div>
          <Progress
            value={(timeLeft / 10) * 100}
            className={`h-3 ${timeLeft <= 3 ? "bg-red-500" : "bg-emerald-500"}`}
          />
        </div>

        {/* Word */}
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-gray-800 mb-2">{currentWord.kanji}</div>
          <div className="text-xl text-gray-600">{currentWord.kana}</div>
        </div>

        {/* Options */}
        {!showResult ? (
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="destructive"
              onClick={() => handleAnswer(1)}
              className="h-14 text-lg"
              disabled={!isActive}
            >
              Sai
            </Button>
            <Button
              onClick={() => handleAnswer(4)}
              className="h-14 text-lg"
              disabled={!isActive}
            >
              Đúng
            </Button>
          </div>
        ) : (
          <div className={`p-4 rounded-lg ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
            <div className="text-center">
              <div className="text-4xl mb-2">{isCorrect ? "✅" : "❌"}</div>
              <div className="text-xl font-medium">
                {isCorrect ? "Chính xác!" : "Hết giờ / Sai!"}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {currentWord.meaning} ({currentWord.kana})
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * Chế độ 5: Watering - Ôn tập từ khó/héo
 */
function WateringMode({ words, progress, uid, onComplete, onClose }: ReviewSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [results, setResults] = useState<{ wordId: string; quality: number }[]>([]);

  const currentWord = words[currentIndex];
  const currentProgress = progress.find((p) => p.wordId === currentWord?.id);

  const handleAnswer = async (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (!currentWord) return;

    const srsResult = await updateWordProgress(uid, currentWord.id, currentWord.courseId, { quality });
    setResults((prev) => [...prev, { wordId: currentWord.id, quality }]);

    if (quality >= 3) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10B981", "#22C55E", "#16A34A", "#0F766E"],
      });
    }

    if (currentIndex < words.length - 1) {
      setShowAnswer(false);
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete(results);
      onClose();
    }
  };

  if (!currentWord) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">💧</div>
          <h3 className="text-2xl font-bold mb-2">Đã tưới xong!</h3>
          <p className="text-gray-500 mb-6">Các cây đã được chăm sóc</p>
          <Button onClick={onClose} className="w-full">
            Đóng
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Cây {currentIndex + 1} / {words.length}</span>
            <span>{Math.round(((currentIndex + 1) / words.length) * 100)}%</span>
          </div>
          <Progress value={((currentIndex + 1) / words.length) * 100} className="h-2" />
        </div>

        <div className="text-center space-y-6">
          <div className="text-6xl font-bold text-gray-800 mb-2">{currentWord.kanji}</div>
          <div className="text-2xl text-gray-600 mb-1">{currentWord.kana}</div>
          <div className="text-lg text-gray-400 mb-4">{currentWord.romaji}</div>

          <div className="text-xl font-medium text-gray-800 mb-2">{currentWord.meaning}</div>

          {currentProgress?.isWithered && (
            <Alert className="bg-amber-50 border-amber-200">
              <AlertDescription className="text-amber-800">
                🍂 Cây này đang héo! Cần tưới nước ngay!
              </AlertDescription>
            </Alert>
          )}

          {currentProgress?.isDifficult && (
            <Alert className="bg-red-50 border-red-200">
              <AlertDescription className="text-red-800">
                ⚠️ Từ vựng khó - Tỉ lệ sai cao
              </AlertDescription>
            </Alert>
          )}

          {currentWord.textMnemonic && (
            <Alert className="bg-emerald-50 border-emerald-200">
              <AlertDescription className="text-emerald-800">
                💡 <strong>Mẹo nhớ:</strong> {currentWord.textMnemonic}
              </AlertDescription>
            </Alert>
          )}

          {!showAnswer ? (
            <Button onClick={() => setShowAnswer(true)} className="w-full text-lg py-4" size="lg">
              Xem đáp án & Tưới nước
            </Button>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <Button variant="destructive" onClick={() => handleAnswer(0)} className="h-12">
                Vẫn quên
              </Button>
              <Button variant="destructive" onClick={() => handleAnswer(1)} className="h-12">
                Quên
              </Button>
              <Button variant="secondary" onClick={() => handleAnswer(2)} className="h-12">
                Khó
              </Button>
              <Button onClick={() => handleAnswer(3)} className="h-12">
                Nhớ ra rồi
              </Button>
              <Button onClick={() => handleAnswer(4)} className="h-12">
                Dễ
              </Button>
              <Button variant="secondary" onClick={() => handleAnswer(5)} className="h-12">
                Rất dễ
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Component chính điều khiển các chế độ học tập
 */
export function ReviewSession({
  mode,
  words,
  progress,
  uid,
  onComplete,
  onClose,
}: ReviewSessionProps) {
  switch (mode) {
    case "planting":
      return <PlantingMode words={words} progress={progress} uid={uid} onComplete={onComplete} onClose={onClose} />;
    case "quiz":
      return <QuizMode words={words} progress={progress} uid={uid} onComplete={onComplete} onClose={onClose} />;
    case "typing":
      return <TypingMode words={words} progress={progress} uid={uid} onComplete={onComplete} onClose={onClose} />;
    case "speed":
      return <SpeedReviewMode words={words} progress={progress} uid={uid} onComplete={onComplete} onClose={onClose} />;
    case "watering":
      return <WateringMode words={words} progress={progress} uid={uid} onComplete={onComplete} onClose={onClose} />;
    default:
      return null;
  }
}