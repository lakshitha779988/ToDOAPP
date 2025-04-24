

# ✅ Task Manager App (React Native CLI)

A simple and efficient task manager mobile application built with **React Native CLI**. This app allows users to create, edit, delete, and manage tasks with completion tracking. It includes navigation between multiple screens, persistent storage using AsyncStorage, and a clean, user-friendly UI.

---

## 🧠 Features

- Add, edit, delete, and view tasks.
- Mark tasks as completed or pending.
- Track total and completed tasks.
- Profile screen with task stats and progress bar.
- AsyncStorage integration for local persistence.
- Custom bottom navigation bar.
- Optimized for Android (works on iOS with additional setup).

---

## 🛠️ Project Setup Instructions

### ⚙️ Environment Setup

Make sure you have the following installed globally:

- **Node.js**
- **Java JDK (11 or 17 recommended)**
- **Android Studio (for Android SDK + Emulator)**
- **React Native CLI**

```bash
npm install -g react-native-cli
```

### 🔧 Clone and Install

```bash
git clone https://github.com/lakshitha779988/ToDOAPP.git
cd task-manager-app
npm install
```



## 📱 Run the App on Android (Development Mode)

1. Start Metro bundler:
   ```bash
   npx react-native start
   ```

2. In a new terminal, run the app:
   ```bash
   npx react-native run-android
   ```

> ✅ Make sure your Android emulator is running OR a device is connected via USB with USB debugging enabled.

---

## 📦 Generate APK for Production

1. Navigate to the `android` directory:
   ```bash
   cd android
   ```

2. Clean the previous build (optional):
   ```bash
   ./gradlew clean
   ```

3. Generate the release APK:
   ```bash
   ./gradlew assembleRelease
   ```

4. The APK will be located at:
   ```
   android/app/build/outputs/apk/release/app-release.apk
   ```

> You can transfer this APK to your Android phone and install it manually.

---

## 🎨 Figma Design

[Figma UI Design](https://www.figma.com/design/vso1HowSNXaxOS9Ht7Xewd/Untitled?node-id=0-1&t=lEIkcjkCqg8WjGbv-1) 

---

## 🎥 Demo Video

[Watch Demo](https://github.com/user-attachments/assets/152d0321-3e26-4222-aaba-34e2be7b6efc)

---





## release link

[release link of v1.0.0](https://github.com/lakshitha779988/ToDOAPP/releases/tag/v1.0.0)

---


## 💬 Acknowledgements

Big thanks to everyone who supported this journey ❤️

---

## 📩 Contact

For questions, suggestions, or feedback, feel free to reach out via GitHub or lakshitha779988@gmail.com.

```
