import React from 'react';
import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 10,
  border: '1px solid #E0E0E0',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#F2F2F2',
  },
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

interface IProps {
  handleSearch: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
}

const SearchWrapper = ({ handleSearch, placeholder }: IProps) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon className="text-gray-400" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleSearch}
      />
    </Search>
  );
};

export default SearchWrapper;
