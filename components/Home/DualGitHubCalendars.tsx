import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const DualGitHubCalendars = () => {
  const [totalContributions1, setTotalContributions1] = useState<number>(0);
  const [totalContributions2, setTotalContributions2] = useState<number>(0);

  return (
    <>
      <Typography
        variant='body2'
        gutterBottom
      >
        Combined work and private calendar
      </Typography>
      <Box sx={{ position: 'relative', height: '200px', mb: 4 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <GitHubCalendar
            username='Mislav-Markusic'
            blockSize={18}
            blockMargin={4}
            theme={{
              level4: '#39d353',
              level3: '#26a641',
              level2: '#006d32',
              level1: '#0e4429',
              level0: 'transparent',
            }}
            transformData={(data) => {
              let calendarContributions = 0;
              data.forEach((day) => {
                calendarContributions += day.count;
              });
              setTotalContributions1(calendarContributions);
              return data;
            }}
            weekStart={1}
            transformTotalCount
            totalCount={totalContributions1 + totalContributions2}
          />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <GitHubCalendar
            username='Pargeo82'
            blockSize={18}
            blockMargin={4}
            weekStart={1}
            theme={{
              level4: '#39d353',
              level3: '#26a641',
              level2: '#006d32',
              level1: '#0e4429',
              level0: '#262626',
            }}
            transformData={(data) => {
              let calendarContributions = 0;
              data.forEach((day) => {
                calendarContributions += day.count;
              });
              setTotalContributions2(calendarContributions);
              return data;
            }}
            hideTotalCount={true}
            hideColorLegend={true}
          />
        </div>
      </Box>
    </>
  );
};

export default DualGitHubCalendars;
