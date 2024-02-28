export class DynamicXpath {

    private constructor() { }

    public static async getXpath(xPath: string, value: string): Promise<string> {
        return xPath.replace("%replaceable%", value);
    }
}