import { parseDependabotConfig } from ".";

async function main() {
    try {
        const dependabot = await parseDependabotConfig(".github/dependabot.yml");

        console.log(`Version: ${dependabot.version}`);

        for (const [name, registry] of Object.entries(dependabot.registries)) {
            console.log(`Registry name: ${name}`);
            console.log(`Registry URL: ${registry.url}`);
            console.log(`Registry username: ${registry.username}`);
            console.log(`Registry password: ${registry.password}`);
        }

        for (const update of dependabot.updates) {
            console.log(`Package ecosystem: ${update.package_ecosystem}`);
            console.log(`Target branch: ${update.target_branch}`);
            console.log(`Directory: ${update.directory}`);
            console.log(`Schedule interval: ${update.schedule.interval}`);
            console.log(`Commit message prefix: ${update.commit_message.prefix}`);
            console.log(`Labels: ${update.labels.join(", ")}`);
        }
    } catch (error) {
        console.error(error);
    }
}

main();
