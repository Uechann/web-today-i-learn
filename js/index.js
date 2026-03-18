// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.
tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // 입력값 가져오기
  const dateValue = document.querySelector("#til-date").value;
  const titleValue = document.querySelector("#til-title").value;
  const contentValue = document.querySelector("#til-content").value;

  // 새 TIL 항목 요소 생성
  const newTilItem = document.createElement("article");
  newTilItem.className = "til-item";

  // 내부 HTML 구성
  newTilItem.innerHTML = `
    <time>${dateValue}</time>
    <h3>${titleValue}</h3>
    <p>${contentValue}</p>
  `;

  // 목록의 맨 앞에 추가 (최신순)
  tilList.prepend(newTilItem);

  // 폼 초기화
  tilForm.reset();
});
