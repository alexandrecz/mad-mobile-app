import { useState } from "react";
import { UserEnumQuery } from "../../constants/user.enums";
import { useUserProviderContext } from "../../context/user.provider";
import { ActionButton, ActionContainer, ActionInput, ActionOptions, ActionSelect, ActionSelectOrder } from "./UserActions.styled"


const UserActions = (): JSX.Element => {

    const listSelect = [UserEnumQuery.NAME, UserEnumQuery.EMAIL, UserEnumQuery.PHONE, UserEnumQuery.CITY];
    const [searchByState, setSearchByState] = useState(UserEnumQuery.NAME);
    const [searchTermState, setSearchTermState] = useState('');
    
    const { fetchDataBy, sortDataBy } = useUserProviderContext();
    
    
    const orderBy = (sortType: UserEnumQuery): void => {
        sortDataBy(sortType);
    }

    const searchBy = (queryType: UserEnumQuery): void => {
        setSearchByState(queryType);
    }

    const handleSearchChange = (param: string): void => {
        setSearchTermState(param);
    }

    const getUsers = (): void => {
        fetchDataBy(searchByState, searchTermState);
    }

    return (
        <ActionContainer>
            <ActionSelectOrder defaultValue={'DEFAULT_ORDER'} onChange={(e) => orderBy(e.target.value as UserEnumQuery)}>
                <option value="DEFAULT_ORDER" disabled defaultValue={'DEFAULT_ORDER'}>Order by</option>
                {
                    listSelect.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))
                }
            </ActionSelectOrder>
            <ActionSelect defaultValue={'DEFAULT_SEARCH'} onChange={(e) => searchBy(e.target.value as UserEnumQuery)}>
                <option value="DEFAULT_SEARCH" disabled defaultValue={'DEFAULT_SEARCH'} >Search by</option>
                {
                    listSelect.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))
                }
            </ActionSelect>

            <ActionOptions>
                <ActionInput
                    type="text"
                    autoComplete="off"
                    name="name"
                    onChange={(e) => handleSearchChange(e.target.value)} />
                <ActionButton onClick={getUsers}>Search</ActionButton>
            </ActionOptions>
        </ActionContainer>
    )
}

export { UserActions }