function Header() {
    let isLoggedIn = false;
    let name = "한승엽";
    return (
        <header>
          <div className="header">
            <h1>Game PC Reservation</h1>
            {isLoggedIn
             ? <h2>{name}님</h2>
             : <h2>로그인이 필요합니다.</h2>
            }
            <h3>오늘 일자 : 2022년 3월 17일</h3>
            <h3>현재 시각 : 12:10:23</h3>
            </div>
        </header>
    );
}

export default Header;