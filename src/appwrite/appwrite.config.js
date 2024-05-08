import config from "../configuration/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    Databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            const post = await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, { title, content, featuredImage, status, userId });
        } catch (error) {
            console.log("error :: ", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            const update = await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
                title, content, featuredImage, status
            });
        } catch (error) {
            console.log("Arrwrite service :: update post :: error", error);
        }
    }
    async deletePost(slug) {
        try {
            const deletePots = await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);

        } catch (error) {
            console.log("Arrwrite service :: update post :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            const getPostInfo = await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
            console.log(getPostInfo);
        } catch (error) {
            
        }
    }
    async getPost(slug){
        try {
            const getPostInfo = await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
            console.log(getPostInfo);
        } catch (error) {
            
        }
    }

    async getAllPost(queries= [Query.equal("status", "active")]){
        try {
            const getPostInfo = await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, queries);
            console.log(getPostInfo);
        } catch (error) {
            console.log("error in get all post");

        }
    }

    async uploadFile(file){
        try {
            const getPostInfo = await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file);
            return getPostInfo;
        } catch (error) {
            console.log("error in upload fiile");
            return false;

        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.appwriteBucketId,fileId)
            return true;
        } catch (error) {
            console.log("error in delete fiile");
            return false;
        }
    }

    async getPreviewFile(fileId){
        try {
            return this.bucket.getFilePreview(config.appwriteBucketId,fileId)  
        } catch (error) {
            console.log("error in delete fiile");
            return false;
        }
    }
}

const service = new Service();
export default service