import { Plugin } from "obsidian";
import { RerenderMarkdownCodeBlockProcessorExampleSettingTab } from "./SettingTab";
import { RerenderMarkdownRenderChild } from "./RerenderMarkdownRenderChild";

interface MarkdownCodeBlockProcessorExamplePluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MarkdownCodeBlockProcessorExamplePluginSettings = {
	mySetting: "default",
};

export default class RerenderMarkdownCodeBlockProcessorExamplePlugin extends Plugin {
	settings: MarkdownCodeBlockProcessorExamplePluginSettings;

	async onload() {
		await this.loadSettings();

		// Your code block post processor
		this.registerMarkdownCodeBlockProcessor(
			"rerender-example",
			(source, el, ctx) => {
				ctx.addChild(new RerenderMarkdownRenderChild(this, el));
			}
		);

		this.addSettingTab(
			new RerenderMarkdownCodeBlockProcessorExampleSettingTab(
				this.app,
				this
			)
		);
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
