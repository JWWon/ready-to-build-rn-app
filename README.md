# Ready to build React Native application

This project is created for jump into building any type of applications without struggle on configuration steps.

## Packages

Those packages are built-in on this project. It's find to replace some packages that you're familiar with.

- `react-native@0.67.2` I create this rn project with [official typescript preset](https://github.com/react-native-community/react-native-template-typescript)

## Minimal configuration steps

1. [yarn berry](https://github.com/yarnpkg/berry) with zero-install is used beneath this project. But due to some compatibility issues, you need to create `node_modules` on your local directory.
    ```bash
    ~$ yarn install
    ```

2. [Optional] If you're not using `Apple Silicon` environment, You need to comment `__apply_Xcode_12_5_M1_post_install_workaround` on ios/Podfile.

    ```ruby
    post_install do |installer|
      # some installation pipelines

      react_native_post_install(installer)
      # TODO: Comment the line below
      # __apply_Xcode_12_5_M1_post_install_workaround(installer)
    end
    ```