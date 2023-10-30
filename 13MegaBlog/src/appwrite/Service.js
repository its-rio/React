import conf from "../conf/conf";
import { Client, Databases, Storage } from "appwrite";


export class Service {
    constructor() {
        const client = Client();
        databases;
        bucket;
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument; {
                conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                };
            }
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }
}
