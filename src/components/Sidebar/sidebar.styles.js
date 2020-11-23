import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
    width: ${props => props.isSidebarOpen ? '20%' : '5%'};
    max-width: 280px;
    min-width: 80px;
    background-image: linear-gradient(
        315deg, 
        ${props => props.colorPalette.bgColor1} 0%,
        ${props => props.colorPalette.bgColor2} 74%
        ),
        url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: ${props => props.colorPalette.fontColorSelected};
    position: relative;
    transition: 0.2s ease-in all;
`;

export const SidebarHeader = styled.h3`
    padding: 20px 0px;
    text-align: center;
    margin-botton: 10px;
    letter-spacing: 6px;
    font-family: ${props=>props.font};
`;

export const MenuItemContainer = styled.div``;
export const ItemContainer = styled.div``;

// Menu Items ---------------------------------------------------------------------------------------------------------

export const MenuItem = styled.div` 
    ${props => !props.isSidebarOpen && `
        text-align: center;
        ${props.selected && `background-color: ${props.selectedBackgroundCollapsedMode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'}`};
    `}
    padding: 6px 20px;
    font-weight: 600;
    color: ${props => props.selected ? props.fontColorSelected : props.fontColor};
    font-family: ${props=>props.font};
    white-space: nowrap;
    position: relative; // Dropdown Icon
    transition: 0.1s ease-in all;

    &:hover{
        color: ${props => props.colorPalette.fontColorSelected};
        transition: 0.1s ease-in all;
    }

    &:after{
        content: ''; 
        border: 1px solid ${props => props.selected ? props.colorPalette.fontColorSelected : props.colorPalette.dividerColor};
        display: ${props => props.isSidebarOpen && props.selected && props.isOpen ? 'none' : 'block'};
        margin: 8px 0 4px;
        transition: 0.1s ease-in all;
    }

    ${props => !props.selected && `
        &:hover{ 
            &:after{
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: 0.1s ease-in all;
            }
        }
    `}
`;

export const Text = styled.p`
    display: ${props => props.isSidebarOpen ? 'inline' : 'none'};
`;

export const Icon = styled.img`
    ${props => props.isSidebarOpen && `
    padding-right: 20px;
    transition: .2s ease-in padding-right;
    `}
    height: 16px;
    width: 16px;
`;

// Sub Menu Items
export const SubMenuItemContainer = styled.div`
    font-size: 14px;
    ${props => props.isSidebarOpen && 'padding-left: 15%;'};
    ${props => !props.isSidebarOpen && 'text-align: center;'};
`;
export const SubMenuItem = styled.p`
    color: ${props => props.selected ? props.colorPalette.fontColorSelected : props.colorPalette.dividerColor};
    ${props => props.selected && 'font-weight: bold; letter-spacing: 2px;'};
    transition: .2s;

    &:hover{
        color: ${props => props.colorPalette.fontColorSelected};
    }
`;


// Dropdown Icon 
export const DropdownIcon = styled.span`
    position: absolute;
    top: ${props => props.isOpen ? '16px' : '12px'};
    right: 24px;
    border: solid ${props => props.selected ? props.colorPalette.fontColorSelected : props.colorPalette.dividerColor};
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: ${props => props.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
    transition: .4s;
`;

// Toggler ------------------------------------------------------------------------------------------------------
export const TogglerContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: auto;
`;

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: .25em;
        width: 100%;
        height: .1em;
        background: #fff;
        box-shadow:
            0 .75em 0 0 #fff,
            0 1.5em 0 0 #fff
    }
`;