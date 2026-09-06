import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { AuthForm } from "../components/AuthForm";
import { PlantGarden } from "../components/PlantGarden";
import { ReviewSession, ReviewMode } from "../components/ReviewModes";
import { ImportExcel } from "../components/ImportExcel";
import { Statistics } from "../components/Statistics";
import { Leaderboard } from "../components/Leaderboard";
import { FirebaseToolkit } from "../components/FirebaseToolkit";
import { PlantStageBadge } from "../components/ui/plant-stage-badge";
import { onAuthStateChanged, firebaseSignOut, auth, db } from "../lib/firebase";
import { getUserProgress } from "../services/progressService";
import { getUserProfile } from "../services/authService";
import { SAMPLE_COURSES, HIRAGANA_WORDS, KATAKANA_WORDS, JLPT_N5_WORDS, getWordsByCourse } from "../data/sampleWords";

export default function Index() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [progress, setProgress] = useState<any[]>([]);
  const [words, setWords] = useState<Map<string, any>>(new Map());
  const [courses, setCourses] = useState<any[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<"planting" | "quiz" | "typing" | "speed" | "watering" | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [activeTab, setActiveTab] = useState<"garden" | "stats" | "leaderboard" | "toolkit">("garden");
  const [loading, setLoading] = useState(true);

  // Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        setUser(userAuth);
        const profileData = await getUserProfile(userAuth.uid);
        setProfile(profileData);
        loadUserData(userAuth.uid);
      } else {
        setUser(null);
        setProfile(null);
        setProgress([]);
        setWords(new Map());
        setCourses([]);
        setSelectedCourse(null);
        setSelectedMode(null);
        setShowReview(false);
        setShowImport(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Load user data
  const loadUserData = async (uid: string) => {
    try {
      setLoading(true);
      
      // Load progress
      const userProgress = await getUserProgress(uid);
      setProgress(userProgress);
      
      // Load sample words
      const allWords = new Map<string, any>();
      [...HIRAGANA_WORDS, ...KATAKANA_WORDS, ...JLPT_N5_WORDS].forEach((word) => {
        allWords.set(word.id, word);
      });
      setWords(allWords);
      
      // Load sample courses
      setCourses(SAMPLE_COURSES);
      
      setLoading(false);
    } catch (error) {
      console.error("Error loading user data:", error);
      setLoading(false);
    }
  };

  // Handle course selection
  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    setSelectedMode(null);
    setShowReview(false);
    
    // Load words for this course
    const courseWords = getWordsByCourse(courseId);
    const wordMap = new Map<string, any>();
    courseWords.forEach((word: any) => {
      wordMap.set(word.id, word);
    });
    setWords(wordMap);
  };

  // Handle mode selection
  const handleModeSelect = (mode: "planting" | "quiz" | "typing" | "speed" | "watering") => {
    setSelectedMode(mode);
    setShowReview(true);
  };

  // Handle review completion
  const handleReviewComplete = (results: any[]) => {
    setShowReview(false);
    setSelectedMode(null);
  };

  // Handle import completion
  const handleImportSuccess = (courseId: string) => {
    setShowImport(false);
    setSelectedCourse(courseId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-5xl mb-4">🌱</div>
          <h2 className="text-2xl font-bold">Đang tải...</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <AuthForm onSuccess={(userData) => {
            // This will be handled by auth state change
          }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-3xl font-bold text-emerald-600">🌱 KotobaGarden</div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-1">
                  <button
                    onClick={() => setActiveTab("garden")}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === "garden"
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    🌱 Vườn
                  </button>
                  <button
                    onClick={() => setActiveTab("stats")}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === "stats"
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    📊 Thống kê
                  </button>
                  <button
                    onClick={() => setActiveTab("leaderboard")}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === "leaderboard"
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    🏆 Xếp hạng
                  </button>
                  <button
                    onClick={() => setActiveTab("toolkit")}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === "toolkit"
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    🛠️ Firebase
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-600">
                  Xin chào, {profile?.displayName?.split(" ")[0] || "Bạn"}!
                </span>
              </div>
              <Button
                variant="outline"
                onClick={() => firebaseSignOut(auth)}
                size="sm"
              >
                Đăng xuất
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab: Plant Garden */}
          {activeTab === "garden" && (
            <>
              {/* Course Selector */}
              {selectedCourse === null && courses.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Chọn khóa học</h2>
                    <Button
                      onClick={() => setShowImport(true)}
                      variant="outline"
                    >
                      Nhập từ Excel
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map((course: any) => (
                      <Button
                        key={course.id}
                        onClick={() => handleCourseSelect(course.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-left ${
                          selectedCourse === course.id ? "border-emerald-300 bg-emerald-50" : ""
                        }`}
                      >
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-500 line-clamp-2">{course.description}</p>
                          <div className="mt-2 flex items-center gap-2 text-xs">
                            <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">
                              {course.level}
                            </span>
                            <span className="text-gray-400">{course.wordCount} từ</span>
                          </div>
                        </div>
                        <PlantStageBadge
                          stage={6}
                          size="sm"
                          className="ml-4"
                        />
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Plant Garden */}
              {selectedCourse && !showReview && !showImport && (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      🌱 Vườn Kotoba
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="text-xl">🔥</span>
                        <span>{profile?.streakCount || 0} ngày</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xl">💎</span>
                        <span>{profile?.totalXp || 0} XP</span>
                      </div>
                    </div>
                  </div>
                  <PlantGarden
                    progress={progress}
                    words={words}
                    onWordClick={(wordId) => {
                      // Show word details or start review
                      alert(`Chi tiết từ: ${wordId}`);
                    }}
                  />
                  <div className="mt-6 flex justify-center space-x-3">
                    <Button
                      onClick={() => handleModeSelect("planting")}
                      variant="outline"
                    >
                      Học từ mới
                    </Button>
                    <Button
                      onClick={() => handleModeSelect("quiz")}
                      variant="outline"
                    >
                      Trắc nghiệm
                    </Button>
                    <Button
                      onClick={() => handleModeSelect("typing")}
                      variant="outline"
                    >
                      Gõ từ
                    </Button>
                    <Button
                      onClick={() => handleModeSelect("speed")}
                      variant="outline"
                    >
                      Tốc độ
                    </Button>
                    <Button
                      onClick={() => handleModeSelect("watering")}
                      variant="outline"
                    >
                      Tưới nước
                    </Button>
                  </div>
                </>
              )}
            </>
          )}

          {/* Tab: Statistics */}
          {activeTab === "stats" && (
            <Statistics
              progress={progress}
              words={words}
              profile={profile}
            />
          )}

          {/* Tab: Leaderboard */}
          {activeTab === "leaderboard" && (
            <Leaderboard currentUid={user?.uid} />
          )}

          {/* Tab: Firebase Toolkit */}
          {activeTab === "toolkit" && <FirebaseToolkit />}

          {/* Review Session */}
          {showReview && selectedMode && selectedCourse && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
              <ReviewSession
                mode={selectedMode}
                words={Array.from(words.values())}
                progress={progress}
                uid={user.uid}
                onComplete={handleReviewComplete}
                onClose={() => {
                  setShowReview(false);
                  setSelectedMode(null);
                }}
              />
            </div>
          )}

          {/* Import Excel */}
          {showImport && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
              <ImportExcel
                uid={user.uid}
                onSuccess={handleImportSuccess}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}