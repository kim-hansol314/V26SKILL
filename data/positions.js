/* =========================================================================
 * V26 포지션(선발/중계/마무리) 노출 규칙  (편집 가능 데이터 파일)
 * -------------------------------------------------------------------------
 * 스킬 하나가 어느 탭에서 검색되는지를 결정합니다. 판정 순서:
 *
 *   1) POSITION_OVERRIDE 에 스킬명이 있으면 → 그 값을 그대로 사용 (최우선)
 *   2) 스킬명에 배치 태그(POSITION_TAGS)가 있으면 → 해당 탭들
 *      태그가 하나도 없으면 → 선발/중계/마무리 전부
 *   3) 위 결과를 POSITION_AVAILABILITY(공식 확률표) 로 교집합
 *
 * ▸ POSITION_FILTER_ENABLED = false 로 두면 필터를 끄고 전체를 노출합니다.
 * ========================================================================= */

window.POSITION_FILTER_ENABLED = true;

/* 투수 포지션 키 (data/skills.js 의 SKILL_TABS id 와 동일) */
window.PITCHER_POSITIONS = ["starter", "relief", "closer"];

/* -------------------------------------------------------------------------
 * 1) 스킬명에 박힌 배치 태그 → 노출 탭
 *    예) "마당쇠(불펜)" → 중계 + 마무리 / "워크에식(중계)" → 중계
 *    위에서부터 전부 검사해 합집합을 만듭니다.
 * ---------------------------------------------------------------------- */
window.POSITION_TAGS = [
  ["마무리",   ["closer"]],
  ["불펜",     ["relief", "closer"]],
  ["중계",     ["relief"]],
  ["선발",     ["starter"]],
  ["필승조",   ["relief"]],
  ["셋업",     ["relief"]],
  ["추격조",   ["relief"]],
  ["롱릴리프", ["relief"]],
  ["승리조",   ["relief"]],
];

/* -------------------------------------------------------------------------
 * 2) 공식 확률표 기준 등장 가능 포지션
 *    출처: 넥슨 공식 확률 공개 - "스킬 변경권" 시트
 *    https://cpbv22-fn.qpyou.cn/cpbv22/push/chance/etc_260811.htm
 *    "-" 로 표시된 포지션은 목록에서 제외했습니다.
 *    여기에 없는 스킬(황금세대·투쟁심·해결사 등 카드 고유 스킬)은 전 포지션 허용.
 * ---------------------------------------------------------------------- */
window.POSITION_AVAILABILITY = {
  "속구선호":            ["starter", "relief", "closer"],             
  "변화구선호":           ["starter", "relief", "closer"],             
  "진검승부":            ["starter", "relief", "closer"],             
  "사고방지":            ["starter", "relief", "closer"],             
  "평정심":             ["starter", "relief", "closer"],             
  "이닝이터":            ["starter", "relief", "closer"],             
  "기선제압":            ["starter", "relief", "closer"],             
  "더러운볼끝":           ["starter", "relief", "closer"],             
  "자신감":             ["starter", "relief", "closer"],             
  "좌타킬러":            ["starter", "relief", "closer"],             
  "우타킬러":            ["starter", "relief", "closer"],             
  "위기관리":            ["starter", "relief", "closer"],             
  "완급조절":            ["starter", "relief", "closer"],             
  "에이스":             ["starter", "relief", "closer"],             
  "언터쳐블":            ["starter", "relief", "closer"],             
  "타선지원":            ["starter", "relief", "closer"],             
  "클러치피처":           ["starter", "relief", "closer"],             
  "클러치피쳐":           ["starter", "relief", "closer"],             // 표기 흔들림 대응
  "흐름끊기":            ["starter", "relief", "closer"],             
  "아티스트":            ["starter", "relief", "closer"],             
  "패기":              ["starter", "relief", "closer"],             
  "수호신":             ["starter", "relief", "closer"],             
  "홈어드밴티지":          ["starter", "relief", "closer"],             
  "첫단추":             ["starter"],                                 // ★ 제한
  "리그의강자":           ["starter", "relief", "closer"],             
  "승부사":             ["starter", "relief", "closer"],             
  "라이징스타":           ["starter", "relief"],                       // ★ 제한
  "도전정신":            ["starter", "relief", "closer"],             
  "순위경쟁":            ["starter", "relief", "closer"],             
  "철완":              ["starter", "relief", "closer"],             
  "가을사나이":           ["starter", "relief", "closer"],             
  "저니맨":             ["starter", "relief", "closer"],             
  "마당쇠":             ["relief", "closer"],                        // ★ 제한
  "승리의함성":           ["starter", "relief", "closer"],             
  "원투펀치":            ["starter"],                                 // ★ 제한
  "원포인트릴리프":         ["relief", "closer"],                        // ★ 제한
  "베스트포지션":          ["starter", "relief", "closer"],             
  "전천후":             ["starter", "relief", "closer"],             
  "난세의영웅":           ["starter", "relief", "closer"],             
  "집중력":             ["starter", "relief", "closer"],             
  "위닝샷":             ["starter", "relief", "closer"],             
  "백전노장":            ["starter", "relief", "closer"],             
  "필승카드":            ["starter", "relief", "closer"],             
  "얼리스타트":           ["starter", "relief", "closer"],             
  "긴급투입":            ["starter", "relief", "closer"],             
  "워크에식":            ["starter", "relief", "closer"],             
  "오버페이스":           ["starter", "relief", "closer"],             
  "리그탑플레이어":         ["starter", "relief", "closer"],             
  "파이어볼":            ["starter", "relief", "closer"],             
  "빅게임헌터":           ["starter", "relief", "closer"],             
  "부동심":             ["starter", "relief", "closer"],             
  "집념":              ["starter"],                                 // ★ 제한
  "구속제어":            ["starter", "relief", "closer"],             
  "좌승사자":            ["starter"],                                 // ★ 제한
  "비FA계약":           ["starter", "relief", "closer"],
  "소방수":           ["closer"],
};

/* -------------------------------------------------------------------------
 * 3) 개별 강제 지정 (규칙으로 안 잡히는 예외용)
 *    "스킬명 전체(점수표에 적힌 그대로)": ["starter", ...]  형태.
 *    빈 배열 [] 을 주면 어느 탭에도 노출되지 않습니다.
 *    예) window.POSITION_OVERRIDE = { "라이징스타(배치X)": ["starter"] };
 * ---------------------------------------------------------------------- */
window.POSITION_OVERRIDE = {
};
