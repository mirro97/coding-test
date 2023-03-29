/**
 * 브라우저에 URL 을 입력하면 일어나는 일!
 *
 * 1. URL 해석하기
 * 2. DNS 조회하기 - 도메인을 확인하고 IP 주소로 변환해줌
 * 3. 해당 IP 가 존재하는 서버로 이동
 * 4. ARP 를 이용해 MAC 주소로 변환 - 논리적 주소인 IP 주소를 물리적 주소인 MAC 주소로 변환
 * 4-1. 기계의 실제 위치를 알기 위해 MAC 주소가 필요함
 * 5. TCP 통신을 통해 Soket 열기 - 네트워크를 통해 해당 기기로 패킷 전달. 3-악수를 통해 연결 요청. 요청 수락시 기기는 패킷을 받아 처리
 * 6. 서버는 응답 반환 - HTTP 프로토콜로 들어온 패킷을 읽고 처리. 서버는 요청에 따른 응답값 반환
 * 7. 브라우저는 렌더링 - HTML을 읽고 DOM Tree 구축. DOM Tree 를 이용해 화면에 그림. 스크립트 실행
 */