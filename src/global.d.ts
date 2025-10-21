declare global {
	interface DocumentEventMap {
		"re-render-markdown-code-block-processors:rerender": CustomEvent;
	}
}

export {};
