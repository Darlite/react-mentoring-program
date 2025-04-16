import ModalContent from "../../components/ModalContent/ModalContent";
import {render, screen} from "@testing-library/react";
import {DialogType} from "../../constants/DialogType";
import {mockMoviesData} from "../../mocks/mockMoviesData";

describe("ModalContent", () => {
    it("matches snapshot for Add Movie dialog", () => {
        const { container } = render(<ModalContent currentDialog={DialogType.AddMovie}
                                                   selectedMovie={mockMoviesData}
                                                   handleSubmit={jest.fn()}/>
        );

        expect(container).toMatchSnapshot();
    });

    it("matches snapshot for Edit Movie dialog", () => {
        const { container } = render(<ModalContent currentDialog={DialogType.EditMovie}
                                                   selectedMovie={mockMoviesData}
                                                   handleSubmit={jest.fn()}/>
        );

        expect(container).toMatchSnapshot();
    });

    it("matches snapshot for Delete Movie dialog", () => {
        const { container } = render(<ModalContent currentDialog={DialogType.DeleteMovie}
                                                   selectedMovie={mockMoviesData}
                                                   handleSubmit={jest.fn()}/>
        );

        expect(container).toMatchSnapshot();
    });

    it('renders MovieForm for Add Movie dialog', () => {
        render(
            <ModalContent currentDialog={DialogType.AddMovie}
                          handleSubmit={jest.fn()}
                          selectedMovie={mockMoviesData}
            />
        );

        expect(screen.getByPlaceholderText("Movie title")).toBeInTheDocument();
        expect(screen.queryByDisplayValue("Pulp Fiction")).not.toBeInTheDocument();
    });

    it('renders MovieForm for Edit Movie dialog', () => {
        render(
            <ModalContent currentDialog={DialogType.EditMovie}
                          selectedMovie={mockMoviesData}
                          handleSubmit={jest.fn()} />
        );

        expect(screen.getByPlaceholderText("Movie title")).toBeInTheDocument();
        expect(screen.getByDisplayValue(mockMoviesData.title)).toBeInTheDocument();
    });

    it('renders MovieForm for Delete Movie dialog', () => {
        render(
            <ModalContent currentDialog={DialogType.DeleteMovie}
                          selectedMovie={mockMoviesData}
                          handleSubmit={jest.fn()} />
        );

        expect(screen.getByText(/Are you sure you want to delete/)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
    });

    it('renders nothing if the proper DialogType is not provided', () => {
        const { container } = render(<ModalContent currentDialog={""}
                                                   selectedMovie={mockMoviesData}
                                                   handleSubmit={jest.fn()} />
        );

        expect(container).toBeEmptyDOMElement();
    })
})
