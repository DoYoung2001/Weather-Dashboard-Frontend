import React, { useState } from "react";
import styles from "./Mypage.module.css";
import PasswordConfirmModal from "./PasswordConfirmModal";
import PasswordChangeModal from "./PasswordChangeModal";

const EditUserInfo = ({ userInfo, setUserInfo, setEditMode }) => {
  // 사용자 정보 편집을 위한 상태 설정
  const [editData, setEditData] = useState({
    name: userInfo.name,
    id: userInfo.id,
    email: userInfo.email,
  });

  // 모달의 상태 관리
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);

  // 입력 필드 값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // 저장 버튼 클릭 시 사용자 정보 업데이트
  const handleSave = () => {
    setUserInfo({ ...userInfo, ...editData });
    setEditMode(false); // 편집 모드 종료
  };

  // 취소 버튼 클릭 시 편집 모드 종료
  const handleCancel = () => {
    setEditMode(false);
  };

  // 비밀번호 변경 버튼 클릭 시 비밀번호 확인 모달 열기
  const handleChangePassword = () => {
    setIsConfirmModalOpen(true); // 현재 비밀번호 확인 모달 열기
  };

  return (
    <div className={styles.info}>
      <p>
        <strong>이름</strong>
        <input
          type="text"
          name="name"
          value={editData.name}
          onChange={handleChange}
          className={styles.inputField}
        />
      </p>
      <p>
        <strong>아이디</strong>
        <input
          type="text"
          name="id"
          value={editData.id}
          onChange={handleChange}
          className={styles.inputField}
        />
      </p>
      <p>
        <strong>이메일</strong>
        <input
          type="email"
          name="email"
          value={editData.email}
          onChange={handleChange}
          className={styles.inputField}
        />
      </p>
      <p>
        <strong>비밀번호</strong>
        <button
          className={styles.changePasswordBtn}
          onClick={handleChangePassword}
        >
          비밀번호 변경
        </button>
      </p>
      <p>
        <strong>가입일</strong>
        <span>{userInfo.joinDate}</span>
      </p>

      <div className={styles.buttonContainer}>
        <button className={styles.saveBtn} onClick={handleSave}>
          저장
        </button>
        <button className={styles.cancelBtn} onClick={handleCancel}>
          취소
        </button>
      </div>

      {/* 현재 비밀번호 확인 모달 */}
      {isConfirmModalOpen && (
        <PasswordConfirmModal
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={() => {
            setIsConfirmModalOpen(false);
            setIsChangeModalOpen(true); // 비밀번호 변경 모달 열기
          }}
        />
      )}

      {/* 비밀번호 변경 모달 */}
      {isChangeModalOpen && (
        <PasswordChangeModal
          onClose={() => setIsChangeModalOpen(false)}
          onChangePassword={(newPassword) => {
            console.log("새 비밀번호:", newPassword);
            setIsChangeModalOpen(false); // 비밀번호 변경 후 모달 닫기
          }}
        />
      )}
    </div>
  );
};

export default EditUserInfo;
