import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import View from "../View.vue";

describe("View.vue", () => {
  const viewText = "This is a test text";

  it("renders element correctly", async () => {
    const viewId = "test-view-id";

    render(View, {
      props: {
        element: "p",
        id: viewId,
      },
      slots: {
        default: viewText,
      },
    });

    const view = await screen.findByText(viewText);

    expect(view.id).toBe(viewId);
  });
});
