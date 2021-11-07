import React from 'react';
import styled, { css } from 'styled-components';
import Box from '@/components/Common/Box';
import SideBarStreamerList from './SideBarStreamerList';

export default function SideBar() {
    return (
        <StyledBox alignItems="flex-start">
            <SideBarStreamerList />
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    width: ${({ theme }) => theme.size.sidebarWidth};
    height: 100%;
    z-index: ${({ theme }) => theme.zIndex.sideBar};
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray3};
        `}
    position : fixed;
    top: ${({ theme }) => theme.size.headeHeight};
    left: 0;
    padding-top: 10px;
`;
