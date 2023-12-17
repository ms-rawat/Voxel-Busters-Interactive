import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import Card from './Card';
import '../App.css'
function Pagination({ filteredData }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box className=''>
      
      <Box className='flex md:flex-row justify-around lg:flex-row  flex-col flex-grow flex-wrap'>
        {filteredData && filteredData.length > 0 ? (
          filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((startup) => (
              <Card key={startup._id} startup={startup} />
            ))
        ) : (
          <p>No data available</p>
        )}
      </Box>
      <div className='flex flex-row justify-center m-3 '>
      <TablePagination
     component='div'
        className='pagination'
        rowsPerPageOptions={[20, 50,100 , { label: 'All', value: -1 }]}
        colSpan={3}
        count={filteredData ? filteredData.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            'aria-label': 'rows per page',
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
      
      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        Page: {page + 1}
      </Box>
      
    </Box>
  );
}

Pagination.propTypes = {
  filteredData: PropTypes.array,
};

export default Pagination;
