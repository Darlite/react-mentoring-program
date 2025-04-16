import React from "react";
import {render} from "@testing-library/react";
import DeleteDialog from "../../components/DeleteDialog/DeleteDialog";
import {mockMoviesData} from "../../mocks/mockMoviesData";

describe("DeleteDialog", () => {
    it("renders correctly", () => {
        const { container } = render(<DeleteDialog movieToDelete={mockMoviesData}/>);
        expect(container).toMatchSnapshot();
    });
})