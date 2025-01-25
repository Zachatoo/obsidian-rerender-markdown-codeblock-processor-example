import { App, PluginSettingTab, Setting } from "obsidian";
import RerenderMarkdownCodeBlockProcessorExamplePlugin from "./main";

export class RerenderMarkdownCodeBlockProcessorExampleSettingTab extends PluginSettingTab {
	plugin: RerenderMarkdownCodeBlockProcessorExamplePlugin;

	constructor(
		app: App,
		plugin: RerenderMarkdownCodeBlockProcessorExamplePlugin
	) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName("Setting")
			.setDesc(
				"Updating this setting will re-render markdown code block processors"
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.mySetting)
					.onChange(async (value) => {
						this.plugin.settings.mySetting = value;
						await this.plugin.saveSettings();
						// Trigger the re-render event
						// If any setting change should re-render the markdown code block processors, you can trigger this event in the Plugin.saveSettings method instead
						this.app.workspace.trigger(
							"rerender-markdown-code-block-processors:rerender"
						);
					})
			);
	}
}
