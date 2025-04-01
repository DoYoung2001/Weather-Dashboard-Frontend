import React, { useState } from "react";
import styles from "./Mypage.module.css";

const PasswordChangeModal = ({ onClose, onChangePassword }) => {
  const [newPassword, setNewPassword] = useState(""); // 새 비밀번호 상태
  const [confirmPassword, setConfirmPassword] = useState(""); // 새 비밀번호 확인 상태
  const [error, setError] = useState(""); // 오류 메시지 상태

  const handleSubmit = () => {
    // 비밀번호와 확인 비밀번호가 일치하는지 검사
    if (newPassword !== confirmPassword) {
      setError("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
      return;
    }

    // 비밀번호 길이가 최소 8자 이상인지 검사
    if (newPassword.length < 8) {
      setError("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    // 비밀번호가 대소문자, 숫자, 특수문자를 포함하는지 검사
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(newPassword)) {
      setError(
        "비밀번호는 대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다."
      );
      return;
    }

    // 모든 조건을 통과하면 비밀번호 변경 함수 호출
    onChangePassword(newPassword);
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.modalTitle}>비밀번호 변경</div>
        <input
          className={`${styles.modalInput} ${styles.modalInputSpacing}`} // 새 비밀번호 입력
          type="password"
          placeholder="새 비밀번호 입력"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          className={styles.modalInput} // 새 비밀번호 확인 입력
          type="password"
          placeholder="새 비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className={styles.errorMessageContainer}>
          {/* 오류 메시지가 있으면 표시 */}
          {error && <div className={styles.errorMessage}>{error}</div>}
        </div>

        <div className={styles.modalButtons}>
          <button className={styles.modalButtonChange} onClick={handleSubmit}>
            변경하기
          </button>
          <button className={styles.modalButtonCancle} onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeModal;
