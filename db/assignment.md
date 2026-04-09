# SQL 실습 과제

## 초기 세팅

### DDL (Data Definition Language)
```sql
CREATE TABLE attendance (
  attendance_id INT NOT NULL AUTO_INCREMENT,
  crew_id INT NOT NULL,
  nickname VARCHAR(50) NOT NULL,
  attendance_date DATE NOT NULL,
  start_time TIME,
  end_time TIME,
  PRIMARY KEY (attendance_id)
);
```

### DML (Data Manipulation Language)
```sql
INSERT INTO attendance (crew_id, nickname, attendance_date, start_time, end_time) VALUES
  (1, '검프', '2025-03-04', '09:45', '18:10'),
  (1, '검프', '2025-03-05', '09:50', '18:05'),
  (1, '검프', '2025-03-06', '09:59', '18:02'),
  (1, '검프', '2025-03-07', '10:00', '18:05'),
  (1, '검프', '2025-03-10', '12:55', '18:10'),
  (1, '검프', '2025-03-11', '09:58', '18:03'),
  (1, '검프', '2025-03-12', '09:55', '18:05'),
  (2, '구구', '2025-03-04', '10:01', '18:01'),
  (2, '구구', '2025-03-05', '09:59', '18:00'),
  (2, '구구', '2025-03-06', '09:58', '17:30'),
  (2, '구구', '2025-03-07', '10:10', '18:00'),
  (2, '구구', '2025-03-11', '09:59', '18:01'),
  (2, '구구', '2025-03-12', '10:02', '18:10'),
  (3, '네오', '2025-03-04', '09:59', '18:00'),
  (3, '네오', '2025-03-05', '10:03', '18:15'),
  (3, '네오', '2025-03-07', '10:00', '17:50'),
  (3, '네오', '2025-03-10', '13:05', '18:10'),
  (3, '네오', '2025-03-12', '09:55', '18:00'),
  (4, '브라운', '2025-03-04', '09:59', '18:00'),
  (4, '브라운', '2025-03-05', '09:59', '18:00'),
  (4, '브라운', '2025-03-06', '10:00', '18:00'),
  (4, '브라운', '2025-03-07', '10:00', '18:00'),
  (4, '브라운', '2025-03-10', '13:00', '18:00'),
  (4, '브라운', '2025-03-11', '09:59', '18:00'),
  (4, '브라운', '2025-03-12', '09:59', '18:00'),
  (5, '브리', '2025-03-04', '10:20', '18:10'),
  (5, '브리', '2025-03-05', '09:58', '18:02'),
  (5, '브리', '2025-03-06', '09:59', '18:00'),
  (5, '브리', '2025-03-07', '10:02', '18:00'),
  (5, '브리', '2025-03-11', '09:55', '18:00'),
  (5, '브리', '2025-03-12', '09:57', '18:05'),
  (6, '포비', '2025-03-04', '10:15', '17:58'),
  (6, '포비', '2025-03-05', '10:05', '18:05'),
  (6, '포비', '2025-03-10', '13:10', '18:10'),
  (6, '포비', '2025-03-11', '09:52', '18:01'),
  (6, '포비', '2025-03-12', '09:59', '18:00'),
  (7, '워니', '2025-03-04', '10:10', '18:10'),
  (7, '워니', '2025-03-05', '09:50', '18:02'),
  (7, '워니', '2025-03-10', '12:59', '18:05'),
  (7, '워니', '2025-03-12', '10:05', '17:00'),
  (8, '리사', '2025-03-04', '09:55', '18:00'),
  (8, '리사', '2025-03-05', '10:01', '18:03'),
  (8, '리사', '2025-03-06', '10:10', '17:40'),
  (8, '리사', '2025-03-07', '10:02', '18:05'),
  (8, '리사', '2025-03-10', '13:02', '18:00'),
  (8, '리사', '2025-03-11', '10:05', '18:10'),
  (8, '리사', '2025-03-12', '10:03', '18:00'),
  (9, '제임스', '2025-03-04', '09:55', '18:00'),
  (9, '제임스', '2025-03-05', '09:59', '18:00'),
  (9, '제임스', '2025-03-06', '09:59', '18:10'),
  (9, '제임스', '2025-03-07', '10:05', '18:00'),
  (9, '제임스', '2025-03-10', '12:59', '17:50'),
  (9, '제임스', '2025-03-11', '09:55', '18:00'),
  (9, '제임스', '2025-03-12', '10:01', '18:00'),
  (10, '류시', '2025-03-04', '10:04', '18:00'),
  (10, '류시', '2025-03-05', '10:02', '18:02'),
  (10, '류시', '2025-03-06', '09:45', '18:05'),
  (10, '류시', '2025-03-07', '10:10', '18:00'),
  (10, '류시', '2025-03-10', '13:03', '17:40'),
  (10, '류시', '2025-03-11', '09:57', '18:10'),
  (10, '류시', '2025-03-12', '09:59', '17:30'),
  (11, '디노', '2025-03-04', '09:59', '18:00'),
  (11, '디노', '2025-03-05', '10:10', '18:00'),
  (11, '디노', '2025-03-06', '09:57', '18:05'),
  (11, '디노', '2025-03-07', '10:00', '18:03'),
  (11, '디노', '2025-03-10', '12:57', '18:00'),
  (11, '디노', '2025-03-11', '09:55', '18:00'),
  (11, '디노', '2025-03-12', '10:03', '18:05'),
  (12, '시지프', '2025-03-04', '09:52', '18:05'),
  (12, '시지프', '2025-03-05', '09:55', '18:00'),
  (12, '시지프', '2025-03-06', '10:15', '18:00'),
  (12, '시지프', '2025-03-07', '10:03', '17:59'),
  (12, '시지프', '2025-03-10', '12:58', '18:10'),
  (12, '시지프', '2025-03-11', '09:55', '18:00'),
  (12, '시지프', '2025-03-12', '10:10', '18:10');
```

---

## DDL 실습

### 문제 1: 테이블 생성하기 (CREATE TABLE)
- **중복된 데이터 컬럼:** `crew_id`, `nickname`
- **crew 테이블 구성:** `crew_id` (PK), `nickname`
- **데이터 추출:** `SELECT DISTINCT crew_id, nickname FROM attendance;`
- **crew 테이블 생성:**
  ```sql
  CREATE TABLE crew (
    crew_id INT NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    PRIMARY KEY (crew_id)
  );
  ```
- **데이터 삽입:**
  ```sql
  INSERT INTO crew (crew_id, nickname)
  SELECT DISTINCT crew_id, nickname FROM attendance;
  ```

### 문제 2: 테이블 컬럼 삭제하기 (ALTER TABLE)
- **불필요해지는 컬럼:** `nickname` (crew 테이블로 분리되었으므로 `crew_id`만 남기면 됨)
- **컬럼 삭제:**
  ```sql
  ALTER TABLE attendance DROP COLUMN nickname;
  ```

### 문제 3: 외래키 설정하기
- **외래키 설정:**
  ```sql
  ALTER TABLE attendance 
  ADD CONSTRAINT fk_attendance_crew 
  FOREIGN KEY (crew_id) REFERENCES crew(crew_id);
  ```

### 문제 4: 유니크 키 설정
- **유니크 키 설정:**
  ```sql
  ALTER TABLE crew ADD CONSTRAINT uk_nickname UNIQUE (nickname);
  ```

---

## DML(CRUD) 실습

### 문제 5: 크루 닉네임 검색하기 (LIKE)
```sql
SELECT nickname FROM crew WHERE nickname LIKE '디%';
```

### 문제 6: 출석 기록 확인하기 (SELECT + WHERE)
```sql
SELECT * FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id
WHERE c.nickname = '어셔' AND a.attendance_date = '2025-03-06';
```

### 문제 7: 누락된 출석 기록 추가 (INSERT)
- 먼저 '어셔'의 `crew_id`를 확인해야 함 (만약 없다면 crew에 먼저 추가)
```sql
-- 어셔가 crew 테이블에 없다면 추가 (id는 임의로 13 부여 가정)
-- INSERT INTO crew (crew_id, nickname) VALUES (13, '어셔');

INSERT INTO attendance (crew_id, attendance_date, start_time, end_time)
SELECT crew_id, '2025-03-06', '09:31', '18:01' FROM crew WHERE nickname = '어셔';
```

### 문제 8: 잘못된 출석 기록 수정 (UPDATE)
```sql
UPDATE attendance a
JOIN crew c ON a.crew_id = c.crew_id
SET a.start_time = '10:00'
WHERE c.nickname = '주니' AND a.attendance_date = '2025-03-12';
```
*(참고: 주니가 crew 테이블에 등록되어 있어야 함)*

### 문제 9: 허위 출석 기록 삭제 (DELETE)
```sql
DELETE a FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id
WHERE c.nickname = '아론' AND a.attendance_date = '2025-03-12';
```

### 문제 10: 출석 정보 조회하기 (JOIN)
```sql
SELECT a.attendance_id, c.nickname, a.attendance_date, a.start_time, a.end_time
FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id;
```

### 문제 11: nickname으로 쿼리 처리하기 (서브 쿼리)
```sql
SELECT * FROM attendance
WHERE crew_id = (SELECT crew_id FROM crew WHERE nickname = '검프');
```

### 문제 12: 가장 늦게 하교한 크루 찾기
```sql
SELECT c.nickname, a.end_time
FROM attendance a
JOIN crew c ON a.crew_id = c.crew_id
WHERE a.attendance_date = '2025-03-05'
ORDER BY a.end_time DESC
LIMIT 1;
```

---

## 집계 함수 실습

### 문제 13: 크루별로 '기록된' 날짜 수 조회
```sql
SELECT crew_id, COUNT(attendance_date) AS days_count
FROM attendance
GROUP BY crew_id;
```

### 문제 14: 크루별로 등교 기록이 있는 날짜 수 조회
```sql
SELECT crew_id, COUNT(start_time) AS attended_days
FROM attendance
WHERE start_time IS NOT NULL
GROUP BY crew_id;
```

### 문제 15: 날짜별로 등교한 크루 수 조회
```sql
SELECT attendance_date, COUNT(crew_id) AS crew_count
FROM attendance
WHERE start_time IS NOT NULL
GROUP BY attendance_date;
```

### 문제 16: 크루별 가장 빠른 등교 시각과 가장 늦은 등교 시각
```sql
SELECT crew_id, MIN(start_time) AS earliest, MAX(start_time) AS latest
FROM attendance
GROUP BY crew_id;
```

---

## 🤔 생각해 보기

### SQL 실습 관련
1. **기본키란 무엇이고 왜 필요한가?**
   - 레코드를 유일하게 식별하는 값입니다. 데이터 중복을 방지하고 정확한 데이터 수정/삭제를 위해 필수적입니다.
2. **AUTO_INCREMENT는 왜 필요할까?**
   - 고유 번호를 수동으로 관리하는 번거로움을 줄이고, 동시성 상황에서 중복 없는 ID 생성을 보장하기 위함입니다.
3. **end_time에 NULL이 저장될 때 주의할 점?**
   - 연산 시 `NULL`은 전파되므로 주의해야 하며, `IS NULL` 또는 `COALESCE` 등을 사용하여 명시적으로 처리해야 합니다.
4. **ER 다이어그램 비유**
   - 1:N 관계 (크루 한 명이 여러 번 출석). 학교 학급의 학생과 출석부 관계와 같습니다.

### 2026 공통강의 - DB 개념 연결
1. **트랜잭션과 ACID**
   - 100명이 동시에 누를 때 데이터 일관성이 깨지지 않도록 격리성(Isolation)이 보장되어야 하며, 출석 처리가 완전히 성공하거나 실패해야 하는 원자성(Atomicity)이 필요합니다.
2. **파일 시스템 대비 DB의 장점**
   - 동시성 제어, 무결성 제약 조건, 효율적인 검색(인덱스), 보안 관리가 용이합니다.
3. **NoSQL(MongoDB) 저장 시 차이**
   - 출석 기록을 크루 문서 내에 배열로 저장하거나 유연한 스키마를 가질 수 있지만, 복잡한 조인 연산이 어려울 수 있습니다.

### 🧐 더 생각해 보기 (심화)
1. **nickname을 PK로 하지 않은 이유**
   - 닉네임은 변경될 가능성이 있는 '비즈니스 데이터'이므로, 변하지 않는 대리키(ID)를 PK로 사용하는 것이 유지보수에 유리합니다.
2. **RESTRICT, CASCADE**
   - RESTRICT: 참조 중인 데이터가 있으면 삭제를 막음. CASCADE: 부모 삭제 시 자식도 함께 삭제.
3. **서브쿼리 vs JOIN 성능**
   - 대용량 데이터에서는 일반적으로 JOIN이 옵티마이저 최적화에 유리하지만, 상황에 따라 다를 수 있습니다.
4. **정규화 장단점**
   - 정규화는 데이터 중복을 줄여 일관성을 높이지만 JOIN 비용이 발생합니다. 비정규화는 조회 성능을 높이지만 데이터 불일치 위험이 있습니다.
5. **Connection Pooling**
   - 매번 DB 연결을 맺고 끊는 비용을 줄이기 위해 미리 연결을 생성해두고 재사용하는 기술입니다.
6. **트랜잭션 묶기**
   - `START TRANSACTION;` ... `COMMIT;` (또는 오류 시 `ROLLBACK;`)을 사용하여 원자성을 보장합니다.
