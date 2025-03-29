import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditUserInfo from "./EditUserInfo";
import styles from "./Mypage.module.css";

const UserInfo = ({ userInfo, setUserInfo }) => {
  const [editMode, setEditMode] = useState(false); // 수정 모드 여부
  const [showConfirm, setShowConfirm] = useState(false); // 탈퇴 확인 모달 표시 여부
  const navigate = useNavigate();

  // 회원 탈퇴 버튼 클릭 시 모달 표시
  const handleDelete = () => {
    setShowConfirm(true);
  };

  // 회원 탈퇴 확인 시 메인 페이지로 이동
  const confirmDelete = () => {
    alert("회원 탈퇴가 완료되었습니다.");
    navigate("/");
  };

  return (
    <section className={styles.infoSection}>
      <div className={styles.infoHeader}>
        <h3>내 정보</h3>
        {/* 수정 버튼 (수정 모드가 아닐 때만 표시) */}
        {!editMode && (
          <button className={styles.editBtn} onClick={() => setEditMode(true)}>
            수정하기
          </button>
        )}
      </div>

      {/* 일반 모드: 회원 정보 표시 */}
      {!editMode ? (
        <div className={styles.info}>
          <p>
            <strong>이름</strong>
            <span>{userInfo.name}</span>
          </p>
          <p>
            <strong>아이디</strong>
            <span>{userInfo.id}</span>
          </p>
          <p>
            <strong>이메일</strong>
            <span>{userInfo.email}</span>
          </p>
          <p>
            <strong>비밀번호</strong>
            <span>{userInfo.password}</span>
          </p>
          <p>
            <strong>가입일</strong>
            <span>{userInfo.joinDate}</span>
          </p>
          {/* 회원 탈퇴 버튼 */}
          <p>
            <strong className={styles.withdrawText}>탈퇴하기</strong>
            <button className={styles.deleteBtn} onClick={handleDelete}>
              탈퇴하기
            </button>
          </p>
        </div>
      ) : (
        // 수정 모드: 회원 정보 수정 컴포넌트 표시
        <EditUserInfo
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setEditMode={setEditMode}
        />
      )}

      {/* 회원 탈퇴 확인 모달 */}
      {showConfirm && (
        <div className={styles.confirmModal}>
          <div className={styles.confirmTitle}>정말 탈퇴하시겠습니까?</div>
          <button className={styles.saveBtn} onClick={confirmDelete}>
            확인
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => setShowConfirm(false)}
          >
            취소
          </button>
        </div>
      )}
    </section>
  );
};

export default UserInfo;