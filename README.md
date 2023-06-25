# react_redux

## compare_redux

- with_redux.html
  - 간단한 redux를 사용한 html 파일
- without_redix
  - redux를 쓰지 않은 html 파일
- redux_example
  - 간단한 CRD 기능이 들어간 redux를 사용한 html 파일



## react_redux_1

- src/components/xxx.jsx
  
  - redux 사용하지 않고 데이터 주고받기

- src/components/use_redux
  
  - redux 활용하여 데이터 주고받기

- src/containers/xxx.jsx
  
  - redux를 통해 데이터 받고 넘겨주면 아래는 redux를 활용한 코드가 아니라 재사용이 가능할 경우 유용하게 사용가능
  
  - 주석처리 된 것은 그냥 redux 활용
  
  - 주석처리 되지 않은 것은 react-redux 활용

- index.js
  
  - react-redux를 사용할려면 최상위를 Provider로 감싸주어야 함.

- store.js
  
  - createStore 같은 경우 react 버전이 업그레이드 되면서 deprecated 되었음
  
  - createStore를 사용하고 싶은 경우 legacy_createStore as createStore로 사용
  
  - 현재는 redux toolkit의 configureStore로 대체하는 것을 권장
  
  - createStore는 Reducer와 Middleware를 추가할 때, 설치해야 하는 요소가 많다는 복잡함을 가지고 있다. 하지만 이를 간단하고 단순하게 만든 **@reduxjs/toolkit의 configureStore를 사용**하면오류의 확률을 줄이고 편하게 사용 가능
    
    - 설치는 `npm install @reduxjs/toolkit -D`
    
    - import는 `import { configureStore } from '@reduxjs/toolkit';`
    
    - 사용하는 방법
    
    ![](C:\Users\user\AppData\Roaming\marktext\images\2023-06-26-01-24-32-image.png)
    
    ![](C:\Users\user\AppData\Roaming\marktext\images\2023-06-26-01-24-53-image.png)
    
    ![](C:\Users\user\AppData\Roaming\marktext\images\2023-06-26-01-25-04-image.png)
    
    - **reducer** : modules/index.js에 combineReducers로 사용할 **Reducer들을 묶은 파일**을 가져온다.
    - **middleware** : 액션이 실행될 때, 로그를 찍는 logger 등의 **사용할 미들웨어들**을 나열한다.
    - **devTools** : **개발자 도구 사용 여부**를 나타내며 true, false로 값을 지정할 수 있다.
    - **preloadedState** : 스토어가 처음 생성될 때, **스토어의 초기값을 설정**한다. rootReducer에 포함되어져 있는 스토어만 사용 가능하다. 즉, **2번째 사진의 initialState에 속해있는 값들의 초기값들을 설정하는 부분**이다.
