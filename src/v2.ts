/**
 * The Dependabot v2 configuration.
 *
 * See [GitHub Docs](https://docs.github.com/en/code-security/supply-chain-security/configuration-options-for-dependency-updates) for more.
 */
export namespace V2DependabotConfig {
    export interface Config {
        version: number;
        enable_beta_ecosystems?: boolean;
        registries?: { [key: string]: Registry };
        updates: Update[];
    }

    export interface Update {
        package_ecosystem: PackageEcosystem;
        directory: string;
        schedule: Schedule;
        allow?: Allow[];
        assignees?: string[];
        commit_message?: CommitMessage;
        groups?: { [key: string]: Group };
        ignore?: Ignore[];
        insecure_external_code_execution?: InsecureExternalCodeExecution;
        labels?: string[];
        milestone?: number;
        open_pull_requests_limit?: number;
        pull_request_branch_name?: PullRequestBranchName;
        rebase_strategy?: RebaseStrategy;
        reviewers?: string[];
        target_branch?: string;
        vendor?: boolean;
        versioning_strategy?: VersioningStrategy;
    }

    export interface Registry {
        type: string;
        url: string;
        token?: string;
        username?: string;
        password?: string;
    }

    export enum PackageEcosystem {
        bundler = "bundler",
        cargo = "cargo",
        composer = "composer",
        docker = "docker",
        mix = "mix",
        elm = "elm",
        gitsubmodule = "gitsubmodule",
        github_actions = "github-actions",
        gomod = "gomod",
        gradle = "gradle",
        maven = "maven",
        npm = "npm",
        nuget = "nuget",
        pip = "pip",
        pub = "pub",
        swift = "swift",
        terraform = "terraform",
    }

    export interface Schedule {
        interval: Interval;
        day?: Day;
        time?: string;
        timezone?: string;
    }

    export enum Interval {
        daily = "daily",
        weekly = "weekly",
        monthly = "monthly",
    }

    export enum Day {
        monday = "monday",
        tuesday = "tuesday",
        wednesday = "wednesday",
        thursday = "thursday",
        friday = "friday",
        saturday = "saturday",
        sunday = "sunday",
    }

    export interface Allow {
        dependency_name: string;
        dependency_type: DependencyType;
        update_types: UpdateType[];
    }

    export enum DependencyType {
        direct = "direct",
        indirect = "indirect",
    }

    export enum UpdateType {
        all = "all",
        security = "security",
        semver_minor = "semver:minor",
        semver_patch = "semver:patch",
    }

    export interface CommitMessage {
        prefix: Prefix;
        include_scope?: boolean;
    }

    export enum Prefix {
        fix = "fix",
        chore = "chore",
    }

    export interface Group {
        dependency_type: DependencyType;
        exclude_patterns?: string[];
        patterns?: string[];
    }

    export interface Ignore {
        dependency_name: string;
        versions?: string[];
        update_types?: UpdateType[];
    }

    export enum InsecureExternalCodeExecution {
        off = "off",
        on = "on",
    }

    export enum PullRequestBranchName {
        default = "default",
        dependency_name = "dependency-name",
    }

    export enum RebaseStrategy {
        auto = "auto",
        disabled = "disabled",
    }

    export enum VersioningStrategy {
        auto = "auto",
        lockfile_only = "lockfile-only",
        widen_ranges = "widen-ranges",
    }
}
