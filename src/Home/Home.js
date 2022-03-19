import Timetable from "./Timetable"
import { Container, CssBaseline, Typography, Box } from "@mui/material"

function Home() {
    let isLoggedIn = false;
    let name = "한승엽";

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box>
                <Typography align="center" variant="h4" sx={{ mt: 4 }}>
                    Game PC Reservation
                </Typography>
                {isLoggedIn
                    ? <Typography align="right" variant="h6">{name}님</Typography>
                    : <Typography align="right" variant="h6">로그인이 필요합니다.</Typography>
                }
                <Typography align="right" variant="h6">오늘 일자 : 2022년 3월 17일</Typography>
                <Typography align="right" variant="h6">현재 시각 : 12:10:23</Typography>
            </Box>
            <Timetable sx={{ mt: 4 }} />
        </Container>
    );
}

export default Home;