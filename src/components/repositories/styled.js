import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px; padding;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    display: flex;
    list-style-type: none;
    padding: 4px;
    margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    margin: 8px 16px;
    user-select: none;
    cursor: pointer;
    background-color: #fff;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.8);
        /* border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid white; */
    }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 8px;
    display: none;
 
    &.is-selected {
        display: block;
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-left: 10px;
`;