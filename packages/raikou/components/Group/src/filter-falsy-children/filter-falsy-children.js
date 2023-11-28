import { Children } from 'react';
export function filterFalsyChildren(children) {
    return Children.toArray(children).filter(Boolean);
}
//# sourceMappingURL=filter-falsy-children.js.map