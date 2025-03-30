import React, { useState } from "react";
import "./Signup.module.css";

const SignupPage = () => {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    userId: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    address: "",
    detailAddress: "",
    notification: false,
  });

  // 알림 설정 다이얼로그 상태
  const [isNotificationDialogOpen, setIsNotificationDialogOpen] =
    useState(false);
  const [finalNotificationConsent, setFinalNotificationConsent] =
    useState(false);

  // 주소 검색 모달 상태
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  // 입력 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 알림 설정 초기 동의
  const handleInitialNotificationChange = () => {
    setFormData((prev) => ({
      ...prev,
      notification: !prev.notification,
    }));

    if (!formData.notification) {
      setIsNotificationDialogOpen(true);
    }
  };

  // 최종 알림 설정 핸들러
  const handleFinalNotificationConsent = () => {
    setFormData((prev) => ({
      ...prev,
      notification: finalNotificationConsent,
    }));
    setIsNotificationDialogOpen(false);
  };

  // 주소 검색 핸들러
  const handleAddressSearch = () => {
    setIsAddressModalOpen(true);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("폼 제출:", formData);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="userId"
            placeholder="사용자 ID"
            value={formData.userId}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          <input
            type="text"
            name="username"
            placeholder="사용자명"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="form-input"
          />

          <div className="input-group">
            <input
              type="text"
              name="address"
              placeholder="주소"
              value={formData.address}
              className="form-input address-input"
              readOnly
            />
            <button
              type="button"
              onClick={handleAddressSearch}
              className="search-button"
            >
              주소 검색
            </button>
          </div>

          <input
            type="text"
            name="detailAddress"
            placeholder="상세 주소"
            value={formData.detailAddress}
            onChange={handleInputChange}
            className="form-input"
          />

          <div className="notification-container">
            <input
              type="checkbox"
              id="notification"
              checked={formData.notification}
              onChange={handleInitialNotificationChange}
            />
            <label htmlFor="notification" className="notification-label">
              알림 수신 동의
            </label>
          </div>

          <button type="submit" className="submit-button">
            회원가입
          </button>
        </div>
      </form>

      {/* 알림 설정 다이얼로그 */}
      {isNotificationDialogOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>알림 수신 동의</h3>
            <p>알림 서비스에 대한 자세한 내용을 확인해주세요.</p>

            <div className="alert">
              <h4>알림 서비스 안내</h4>
              <p>
                - 최신 소식 및 이벤트 정보를 받아보실 수 있습니다. - 언제든 알림
                설정을 변경하실 수 있습니다.
              </p>
            </div>

            <div className="notification-consent">
              <input
                type="checkbox"
                id="finalNotification"
                checked={finalNotificationConsent}
                onChange={(e) => setFinalNotificationConsent(e.target.checked)}
              />
              <label htmlFor="finalNotification">알림 서비스 최종 동의</label>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                onClick={() => setIsNotificationDialogOpen(false)}
              >
                취소
              </button>
              <button type="button" onClick={handleFinalNotificationConsent}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 주소 검색 모달 */}
      {isAddressModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>주소 검색</h3>
            <p>주소 검색 API 연동 영역</p>
            <button type="button" onClick={() => setIsAddressModalOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
