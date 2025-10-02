# Fastfile for Ionic / TypeScript project

default_platform(:android)

platform :android do

  desc "Build Android APK for Ionic project"
  lane :build_android do
    # 1. تثبيت dependencies
    sh "npm install"

    # 2. بناء المشروع
    sh "ionic build"

    # 3. مزامنة مع Capacitor
    sh "npx cap sync android"

    # 4. فتح Android Studio (اختياري)
    # sh "npx cap open android"

    # 5. يمكن إضافة أوامر أخرى حسب الحاجة
    puts "✅ Build completed. APK is ready to be built in Android Studio or via Appflow."
  end

  # بعد كل عملية، تجاهل run "clean-up" لتجنب الأخطاء
  after_all do |lane|
    puts "All done. Skipping clean-up to avoid after_script errors."
  end

  error do |lane, exception|
    puts "❌ Fastlane encountered an error: #{exception}"
  end

end
