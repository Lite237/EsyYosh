// import channels from "../config/channels.json" assert { type: 'json' };

export async function accountValid(ctx) {
    const channels = [-1002183849980, -1002218171146, -1002212755715];

    const result = await channels.reduce(async (statPromise, channelId) => {
        const stat = await statPromise;
        const user = await ctx.telegram.getChatMember(channelId, ctx.from.id);
        const userLeft = !(user.status === "left" || user.status === "kicked")

        return stat * userLeft
    }, true)

    return result;
}