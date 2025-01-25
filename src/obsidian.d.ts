import "obsidian";

declare module "obsidian" {
	interface Workspace {
		on(
			name: "rerender-markdown-code-block-processors:rerender",
			callback: () => void
		): EventRef;
	}
}
