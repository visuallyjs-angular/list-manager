import { Node, Group, Vertex} from "@visuallyjs/browser-ui"

function notInSameGroup(source: Node|Group, target: Node|Group) {
    return source.group == null || target.group == null || source.group !== target.group
}

const modelOptions = {
    beforeConnect:(source: Vertex, target: Vertex) => {
        return notInSameGroup(source as Node|Group, target as Node|Group)
    }
}

export default modelOptions
