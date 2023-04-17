import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../Input"
import { Wrapper } from "./styled";
import searchQueryParamName from "../queryParameters/searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

export default () => {

    // const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        // const searchParams = new URLSearchParams(location.search);
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};