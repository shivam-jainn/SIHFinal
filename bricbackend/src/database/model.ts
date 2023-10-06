import mongoose, { Document, Schema, Model } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/your-database-name');

// Define interfaces for your data models
interface User extends Document {
    username : string;
    email: string;
  password: string;
  firstName: string;
  lastName: string;
  projects: Array<Project['_id']>;
  views: Array<View['_id']>;
}

interface Project extends Document {
  projectName: string;
  users: Array<User['_id']>;
}

interface View extends Document {
  viewName: string;
  components: Array<Component['_id']>;
  share: boolean;
}

interface Component extends Document {
  users: Array<User['_id']>;
}

// Define Mongoose schemas
const userSchema = new Schema<User>({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  views: [{ type: Schema.Types.ObjectId, ref: 'View' }],
}, { collection: 'users' });

const projectSchema = new Schema<Project>({
  projectName: String,
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { collection: 'projects' });

const viewSchema = new Schema<View>({
  viewName: String,
  components: [{ type: Schema.Types.ObjectId, ref: 'Component' }],

  share: Boolean,
}, { collection: 'views' });

const componentSchema = new Schema<Component>({
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { collection: 'components' });

export const UserModel: Model<User> = mongoose.model('User', userSchema);
export const ProjectModel: Model<Project> = mongoose.model('Project', projectSchema);
export const ViewModel: Model<View> = mongoose.model('View', viewSchema);
export const ComponentModel: Model<Component> = mongoose.model('Component', componentSchema);