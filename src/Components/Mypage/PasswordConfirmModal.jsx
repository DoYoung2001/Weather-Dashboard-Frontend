import React, { useState } from "react";
import styles from "./Mypage.module.css";

// 현재 비밀번호 확인 모달 컴포넌트
const PasswordConfirmModal = ({ onClose, onConfirm }) => {
  const [password, setPassword] = useState(""); // 입력된 비밀번호 상태
  const [error, setError] = useState(""); // 오류 메시지 상태
  const correctPassword = "1234"; // 임시 올바른 비밀번호 (나중에 실제 값으로 변경 필요)

  // 비밀번호 확인 버튼 클릭 시 실행되는 함수
  const handleConfirm = () => {
    if (password === correctPassword) {
      onConfirm(); // 비밀번호가 맞으면 onConfirm 함수 호출 (비밀번호 변경 모달 띄우기)
    } else {
      setError("비밀번호가 일치하지 않습니다."); // 비밀번호 불일치 시 오류 메시지 설정
      setPassword(""); // 비밀번호 입력 필드 초기화
    }
  };

  return (
    <div className={styles.modalBackdrop}> {/* 모달 백그라운드 */}
      <div className={styles.modalContent}> {/* 모달 내용 */}
        <div className={styles.modalTitle}>현재 비밀번호 확인</div>

        <input
          className={styles.modalInput}
          type="password"
          placeholder="현재 비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 변경 시 상태 업데이트
        />
        
        <div className={styles.errorMsgContainer}>
          {error && <p className={styles.errorMsg}>{error}</p>} {/* 오류 메시지 표시 */}
        </div>

        <div className={styles.modalButtons}> {/* 버튼들 */}
          <div>
            <button className={styles.modalButtonSave} onClick={handleConfirm}>
              확인
            </button>
            <button className={styles.modalButtonBack} onClick={onClose}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordConfirmModal;
