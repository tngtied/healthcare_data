# healthcare_data
web application processing and displaying healthcare data

https://github.com/tngtied/healthcare_data/assets/75424805/20e19980-399c-4058-80b7-aa5afa259692


1. 프로그램 사용 방법 
  실행-폴더 안에서 터미널 연 뒤 npm run serve 입력 후 엔터, 로딩 완료될 때까지 기다리기
  웹 주소-웹 브라우저에서 https:localhost:8080 검색
  유저 검색 - 검색창에 id#### (# : 숫자) 형식으로 유저 id 입력, 검색버튼 클릭해 user 검색
  다른 유저정보 검색 시- 새로고침 버튼 클릭 후, 유저 검색
  세부페이지 이동-상단바 클릭

2. 프로그램 및 모듈 소스 코드

	a) 사용한 라이브러리, 모듈

      js, vue3-chart-v2, npm, Vue.js
      python, seaborn, pandas

	b) 프로그램 동작 방식
    1) 프로그램 구현 방향
	      - Vue3 프론트엔드-json-Python matplotlib 백엔드(데이터가공)
	      - 반응형, 동적 웹페이지
	      - 스마트폰 화면 비율에 최적화된 페이지 : 이후의 웹앱 추출 염두
	      - python pandas 라이브러리를 활용하여 엑셀에서 기존 데이터 추출
	      - 파이썬 코드를 통해 어플리케이션에 필요한 데이터 형성
	      - json 파일로의 변환, 프론트엔드로의 전달

    2) 프로그램 동작방식(백엔드)
	      - 당신의 생활패턴: 사용자의 데이터에서 각 시간대마다 Act 항목에서 가장 빈번하게 나타난 항목을 정리하여 원형 그래프로 표기, 전체 평균 생활패턴 또한 원형 그래프로 표기
	      - 약 복용정보: Time, Act, State 항목을 활용하여 가장 빈번하게 약이 복용되었던 시각을 오후, 오전으로 나누어 추출, 각 사용자의 약 복용 패턴을 점그래프로 표기, 모든 사용자의 평균적인 약 복용 패턴 또한 표기
	      - AI비서 순이: Time, Act, State, Sequence, Msg1, Stt1, Msg2, Stt2, Msg3, Stt3 활용, 라이프로그 데이터상의 기간 대비 순이와의 대화 횟수를 통해 호감도 계산, 욕설이 Stt1, Stt2, Stt3 상에서 나타나는지 여부 확인
	      - 대화분석: Msg1, Stt1, Msg2, Stt2, Msg3, Stt3 항목을 사용하여 가장 최근 일어난 대화 내용을 사용자에게 복기
	   위를 통해 완성된 파이썬 코드 파일을 변환한 json파일을 프론트엔드로 전달
