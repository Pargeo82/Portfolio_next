import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

const DualGitHubCalendars = () => {
  const [combinedCalendarData, setCombinedCalendarData] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('https://github-contributions-api.jogruber.de/v4/Pargeo82?y=last').then((response) => response.json()),
      fetch('https://github-contributions-api.jogruber.de/v4/Mislav-Markusic?y=last').then((response) =>
        response.json(),
      ),
    ]).then(([user1Data, user2Data]) => {
      const combinedData = combineCalendarData(user1Data.contributions, user2Data.contributions);
      setCombinedCalendarData(combinedData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const combineCalendarData = (data1, data2) => {
    const combinedData = {};

    data1.forEach((day) => {
      combinedData[day.date] = (combinedData[day.date] || 0) + day.count;
    });

    data2.forEach((day) => {
      combinedData[day.date] = (combinedData[day.date] || 0) + day.count;
    });

    return Object.keys(combinedData).map((date) => ({
      date,
      count: combinedData[date],
      level: calculateLevel(combinedData[date]),
    }));
  };

  const calculateLevel = (count) => {
    if (count === 0) {
      return 0;
    } else if (count >= 1 && count <= 2) {
      return 1;
    } else if (count >= 3 && count <= 4) {
      return 2;
    } else if (count >= 5 && count <= 6) {
      return 3;
    } else {
      return 4;
    }
  };

  return (
    <>
      <Typography
        variant='body2'
        gutterBottom
      >
        Combined work and private calendar
      </Typography>
      <Box sx={{ height: '200px', mb: 4 }}>
        {combinedCalendarData && combinedCalendarData.length > 0 && (
          <GitHubCalendar
            username='Mislav-Markusic'
            blockSize={18}
            blockMargin={4}
            theme={{
              level4: '#39d353',
              level3: '#26a641',
              level2: '#006d32',
              level1: '#0e4429',
              level0: '#262626',
            }}
            transformData={(data) => combinedCalendarData}
            weekStart={1}
          />
        )}
      </Box>
    </>
  );
};

export default DualGitHubCalendars;
