import { parse } from "yaml";
import { promises as fs } from "fs";
import { V2DependabotConfig } from "./v2";

type VersionMap = {
    2: V2DependabotConfig.Config;
};

type DependabotConfigVersion = keyof VersionMap;

export async function parseDependabotConfig(
    filePath: string,
    version: DependabotConfigVersion = 2,
): Promise<VersionMap[typeof version]> {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const parsed = parse(fileContent);

    if (parsed.version !== version) {
        throw new Error(`Version mismatch: expected ${version}, got ${parsed.version}`);
    }

    const dependabot: VersionMap[typeof version] = parsed;

    return dependabot;
}
