~ react-native run-ios
Found Xcode project foosApp.xcodeproj
We couldn't boot your defined simulator due to an already booted simulator. We are limited to one simulator launched at a time.
Launching iPhone 6 (iOS 10.2)...
Building using "xcodebuild -project foosApp.xcodeproj -configuration Debug -scheme foosApp -destination id=FA8F4301-D249-43D8-8C10-E666CC1AACF3 -derivedDataPath build"
User defaults from command line:

    IDEDerivedDataPathOverride = /Users/roman/Workspace/foosApp/ios/build


=== BUILD TARGET yoga OF PROJECT React WITH CONFIGURATION Debug ===


Check dependencies



=== BUILD TARGET jschelpers OF PROJECT React WITH CONFIGURATION Debug ===

Check dependencies



=== BUILD TARGET cxxreact OF PROJECT React WITH CONFIGURATION Debug ===

Check dependencies



=== BUILD TARGET React OF PROJECT React WITH CONFIGURATION Debug ===


Check dependencies



PhaseScriptExecution Start\ Packager /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/React.build/Debug-iphonesimulator/React.build/Script-006B79A01A781F38006873D1.sh
    cd /Users/roman/Workspace/foosApp/node_modules/react-native/React
    /bin/sh -c /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/React.build/Debug-iphonesimulator/React.build/Script-006B79A01A781F38006873D1.sh

Connection to localhost port 8081 [tcp/sunproxyadmin] succeeded!



PhaseScriptExecution Include\ RCTJSCProfiler /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/React.build/Debug-iphonesimulator/React.build/Script-142C4F7F1B582EA6001F0B58.sh
    cd /Users/roman/Workspace/foosApp/node_modules/react-native/React
    /bin/sh -c /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/React.build/Debug-iphonesimulator/React.build/Script-142C4F7F1B582EA6001F0B58.sh



=== BUILD TARGET BVLinearGradient OF PROJECT BVLinearGradient WITH CONFIGURATION Debug ===


Check dependencies



CompileC /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradientManager.o BVLinearGradient/BVLinearGradientManager.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler
    cd /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient
    export LANG=en_US.US-ASCII
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Users/roman/.nvm/versions/node/v6.5.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -arch x86_64 -fmessage-length=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit=0 -std=gnu99 -fobjc-arc -fmodules -fmodules-cache-path=/Users/roman/Workspace/foosApp/ios/build/ModuleCache -fmodules-prune-interval=86400 -fmodules-prune-after=345600 -fbuild-session-file=/Users/roman/Workspace/foosApp/ios/build/ModuleCache/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -Wno-missing-field-initializers -Wno-missing-prototypes -Werror=return-type -Wunreachable-code -Wno-implicit-atomic-properties -Werror=deprecated-objc-isa-usage -Werror=objc-root-class -Wno-arc-repeated-use-of-weak -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wno-deprecated-implementations -DDEBUG=1 -DOBJC_OLD_DISPATCH_PROTOTYPES=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator10.2.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -mios-simulator-version-min=7.0 -g -Wno-sign-conversion -Wno-infinite-recursion -fobjc-abi-version=2 -fobjc-legacy-dispatch -iquote /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/BVLinearGradient-generated-files.hmap -I/Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/BVLinearGradient-own-target-headers.hmap -I/Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/BVLinearGradient-all-target-headers.hmap -iquote /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/BVLinearGradient-project-headers.hmap -I/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include -I/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include -I/Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/../../React -I../react-native/React -I../react-native/React/Base -I../react-native/React/CSSLayout -I../react-native/React/Executors -I../react-native/React/Modules -I../react-native/React/Profiler -I../react-native/React/Views -I/Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/DerivedSources/x86_64 -I/Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/DerivedSources -F/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator -MMD -MT dependencies -MF /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradientManager.d --serialize-diagnostics /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradientManager.dia -c /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m -o /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradientManager.o

In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:21:1: error: duplicate interface definition for class 'RCTView'
@interface RCTView : UIView
^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:21:12: note: previous definition is here
@interface RCTView : UIView
           ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:26:49: error: property has a previous declaration
@property (nonatomic, copy) RCTDirectEventBlock onAccessibilityTap;
                                                ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:26:49: note: property declared here
@property (nonatomic, copy) RCTDirectEventBlock onAccessibilityTap;
                                                ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:27:49: error: property has a previous declaration
@property (nonatomic, copy) RCTDirectEventBlock onMagicTap;
                                                ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:27:49: note: property declared here
@property (nonatomic, copy) RCTDirectEventBlock onMagicTap;
                                                ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:32:48: error: property has a previous declaration
@property (nonatomic, assign) RCTPointerEvents pointerEvents;
                                               ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:32:48: note: property declared here
@property (nonatomic, assign) RCTPointerEvents pointerEvents;
                                               ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:48:41: error: property has a previous declaration
@property (nonatomic, assign) NSInteger reactZIndex;
                                        ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:48:41: note: property declared here
@property (nonatomic, assign) NSInteger reactZIndex;
                                        ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:57:36: error: property has a previous declaration
@property (nonatomic, assign) BOOL removeClippedSubviews;
                                   ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:57:36: note: property declared here
@property (nonatomic, assign) BOOL removeClippedSubviews;
                                   ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:70:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:70:39: note: property declared here
@property (nonatomic, assign) CGFloat borderRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:71:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderTopLeftRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:71:39: note: property declared here
@property (nonatomic, assign) CGFloat bor
derTopLeftRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:72:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderTopRightRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:72:39: note: property declared here
@property (nonatomic, assign) CGFloat borderTopRightRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:73:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderBottomLeftRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:73:39: note: property declared here
@property (nonatomic, assign) CGFloat borderBottomLeftRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:74:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderBottomRightRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:74:39: note: property declared here
@property (nonatomic, assign) CGFloat borderBottomRightRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:79:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderTopColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:79:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderTopColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:80:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderRightColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:80:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderRightColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:81:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderBottomColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:81:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderBottomColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:82:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderLeftColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:82:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderLeftColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:83:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/io
s/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:83:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:88:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderTopWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:88:39: note: property declared here
@property (nonatomic, assign) CGFloat borderTopWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:89:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderRightWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:89:39: note: property declared here
@property (nonatomic, assign) CGFloat borderRightWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:90:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderBottomWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradientManager.m:2:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:90:39: note: property declared here
@property (nonatomic, assign) CGFloat borderBottomWidth;
                                      ^
fatal error: too many errors emitted, stopping now [-ferror-limit=]
20 errors generated.



CompileC /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradient.o BVLinearGradient/BVLinearGradient.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler
    cd /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient
    export LANG=en_US.US-ASCII
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Users/roman/.nvm/versions/node/v6.5.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -x objective-c -arch x86_64 -fmessage-length=0 -fdiagnostics-show-note-include-stack -fmacro-backtrace-limit=0 -std=gnu99 -fobjc-arc -fmodules -fmodules-cache-path=/Users/roman/Workspace/foosApp/ios/build/ModuleCache -fmodules-prune-interval=86400 -fmodules-prune-after=345600 -fbuild-session-file=/Users/roman/Workspace/foosApp/ios/build/ModuleCache/Session.modulevalidation -fmodules-validate-once-per-build-session -Wnon-modular-include-in-framework-module -Werror=non-modular-include-in-framework-module -Wno-trigraphs -fpascal-strings -O0 -Wno-missing-field-initializers -Wno-missing-prototypes -Werror=return-type -Wunreachable-code -Wno-implicit-atomic-properties -Werror=deprecated-objc-isa-usage -Werror=objc-root-class -Wno-arc-repeated-use-of-weak -Wduplicate-method-match -Wno-missing-braces -Wparentheses -Wswitch -Wunused-function -Wno-unused-label -Wno-unused-parameter -Wunused-variable -Wunused-value -Wempty-body -Wconditional-uninitialized -Wno-unknown-pragmas -Wno-shadow -Wno-four-char-constants -Wno-conversion -Wconstant-conversion -Wint-conversion -Wbool-conversion -Wenum-conversion -Wshorten-64-to-32 -Wpointer-sign -Wno-newline-eof -Wno-selector -Wno-strict-selector-match -Wundeclared-selector -Wno-deprecated-implementations -DDEBUG=1 -DOBJC_OLD_DISPATCH_PROTOTYPES=0 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator10.2.sdk -fasm-blocks -fstrict-aliasing -Wprotocol -Wdeprecated-declarations -mios-simulator-version-min=7.0 -g -Wno-sign-conversion -Wno-infinite-recursion -fobjc-abi-version=2 -fobjc-legacy-dispatch -iquote /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/BVLinearGradient-generated-files.hmap -I/Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/BVLinearGradient-own-target-headers.hmap -I/Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/BVLinearGradient-all-target-headers.hmap -iquote /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/BVLinearGradient-project-headers.hmap -I/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include -I/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include -I/Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/../../React -I../react-native/React -I../react-native/React/Base -I../react-native/React/CSSLayout -I../react-native/React/Executors -I../react-native/React/Modules -I../react-native/React/Profiler -I../react-native/React/Views -I/Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/DerivedSources/x86_64 -I/Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/DerivedSources -F/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator -MMD -MT dependencies -MF /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradient.d --serialize-diagnostics /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradient.dia -c /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m -o /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradient.o
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:21:1: error: duplicate interface definition for class 'RCTView'
@interface RCTView : UIView
^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:21:12: note: previous definition is here
@interface RCTView : UIView
           ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:26:49: error: property has a previous declaration
@property (nonatomic, copy) RCTDirectEventBlock onAccessibilityTap;
                                                ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:26:49: note: property declared here
@property (nonatomic, copy) RCTDirectEventBlock onAccessibilityTap;
                                                ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:27:49: error: property has a previous declaration
@property (nonatomic, copy) RCTDirectEventBlock onMagicTap;
                                                ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:27:49: note: property declared here
@property (nonatomic, copy) RCTDirectEventBlock onMagicTap;
                                                ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:32:48: error: property has a previous declaration
@property (nonatomic, assign) RCTPointerEvents pointerEvents;
                                               ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGr
adient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:32:48: note: property declared here
@property (nonatomic, assign) RCTPointerEvents pointerEvents;
                                               ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:48:41: error: property has a previous declaration
@property (nonatomic, assign) NSInteger reactZIndex;
                                        ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:48:41: note: property declared here
@property (nonatomic, assign) NSInteger reactZIndex;
                                        ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:57:36: error: property has a previous declaration
@property (nonatomic, assign) BOOL removeClippedSubviews;
                                   ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:57:36: note: property declared here
@property (nonatomic, assign) BOOL removeClippedSubviews;
                                   ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:70:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:70:39: note: property declared here
@property (nonatomic, assign) CGFloat borderRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:71:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderTopLeftRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:71:39: note: property declared here
@property (nonatomic, assign) CGFloat borderTopLeftRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:72:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderTopRightRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:72:39: note: property declared here
@property (nonatomic, assign) CGFloat borderTopRightRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:73:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderBottomLeftRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:73:39: note: property declared here
@property (nonatomic, assign) CGFloat borderBottomLeftRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:74:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderBottomRightRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:74:39: note: property declared here
@property (nonatomic, assign) CGFloat borderBottomRightRadius;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:79:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderTopColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGra
dient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:79:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderTopColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:80:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderRightColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:80:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderRightColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:81:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderBottomColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:81:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderBottomColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:82:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderLeftColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:82:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderLeftColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:83:42: error: property has a previous declaration
@property (nonatomic, assign) CGColorRef borderColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:83:42: note: property declared here
@property (nonatomic, assign) CGColorRef borderColor;
                                         ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:88:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderTopWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:88:39: note: property declared here
@property (nonatomic, assign) CGFloat borderTopWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:89:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderRightWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:89:39: note: property declared here
@property (nonatomic, assign) CGFloat borderRightWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
../react-native/React/Views/RCTView.h:90:39: error: property has a previous declaration
@property (nonatomic, assign) CGFloat borderBottomWidth;
                                      ^
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.m:1:
In file included from /Users/roman/Workspace/foosApp/node_modules/react-native-linear-gradient/BVLinearGradient/BVLinearGradient.h:2:
In file included from ../react-native/React/Views/RCTView.h:15:
/Users/roman/Workspace/foosApp/ios/build/Build/Products/Debug-iphonesimulator/include/React/RCTView.h:90:39: note: property declared here
@property (nonatomic, assign) CGFloat borderBottomWidth;
                                      ^
fatal error: too many errors emitted, stopping now [-ferror-limit=]
20 errors generated.


** BUILD FAILED **



The following build commands failed:
	CompileC /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradientManager.o BVLinearGradient/BVLinearGradientManager.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler
	CompileC /Users/roman/Workspace/foosApp/ios/build/Build/Intermediates/BVLinearGradient.build/Debug-iphonesimulator/BVLinearGradient.build/Objects-normal/x86_64/BVLinearGradient.o BVLinearGradient/BVLinearGradient.m normal x86_64 objective-c com.apple.compilers.llvm.clang.1_0.compiler
(2 failures)

Installing build/Build/Products/Debug-iphonesimulator/foosApp.app
Launching org.reactjs.native.example.foosApp
org.reactjs.native.example.foosApp: 72719