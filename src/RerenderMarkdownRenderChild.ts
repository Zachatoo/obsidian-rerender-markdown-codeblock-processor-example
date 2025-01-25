import { MarkdownRenderChild } from "obsidian";
import RerenderMarkdownCodeBlockProcessorExamplePlugin from "./main";

export class RerenderMarkdownRenderChild extends MarkdownRenderChild {
	plugin: RerenderMarkdownCodeBlockProcessorExamplePlugin;
	constructor(
		plugin: RerenderMarkdownCodeBlockProcessorExamplePlugin,
		containerEl: HTMLElement
	) {
		super(containerEl);
		this.plugin = plugin;
		this.display();
	}

	onload() {
		// Listen to the re-render event
		this.registerEvent(
			this.plugin.app.workspace.on(
				"rerender-markdown-code-block-processors:rerender",
				this.display.bind(this)
			)
		);
	}

	display() {
		this.containerEl.empty();
		this.containerEl.createDiv({ text: this.plugin.settings.mySetting });
	}
}
