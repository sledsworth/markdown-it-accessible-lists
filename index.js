function addRoleToListTokens(state) {
  for (const token of state.tokens) {
    if (
      token.type === "bullet_list_open" ||
      token.type === "ordered_list_open"
    ) {
      token.attrSet("role", "list");
    }
  }
  return true;
}

module.exports = function (md) {
  md.core.ruler.push("accessible-lists", addRoleToListTokens);
};
