import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';
import { Pagination, PaginationItem } from '@mui/material';

const Paginations = ({ currentPage, totalPages, handlePaginationChange }) => {
  const handleChange = (_, value) => {
    handlePaginationChange(value);
  };

  console.log('currentPage-->', currentPage);
  console.log('totalPages-->', totalPages);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {totalPages !== 0 && (
        <Pagination
          page={currentPage}
          onChange={handleChange}
          count={totalPages >= 99 ? 99 : totalPages}
          variant="outlined"
          size="large"
          sx={{
            'Button.MuiPaginationItem-circular.Mui-selected': {
              bgcolor: '#54ADFF',
              color: '#fff',
              border: '1px solid #54ADFF',
            },
            button: {
              color: '#111111',
              backgroundColor: '#fff',
              border: '1px solid #54ADFF',
            },
          }}
          renderItem={item => (
            <PaginationItem
              components={{
                previous: LiaLongArrowAltLeftSolid,
                next: LiaLongArrowAltRightSolid,
              }}
              {...item}
            />
          )}
        />
      )}
    </div>
  );
};

export default Paginations;
