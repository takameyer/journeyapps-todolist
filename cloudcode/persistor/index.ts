import { TaskContext } from '@journeyapps/cloudcode';

export async function run(this: TaskContext) {
    // Your code here
}
// This MUST be defined, and either return access.unauthorized() or access.authorized().
export async function authenticate({request, access}) {
    return access.authorized();
}

export async function get({params, request, response}) {
    return {hello: 'world'};
}