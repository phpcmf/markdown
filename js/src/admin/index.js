import app from 'cmf/admin/app';
import { initialize } from '../common/index';

app.initializers.add('cmf-markdown', initialize);
