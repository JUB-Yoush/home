import sys
from flask import Flask, render_template, send_from_directory
from flask_flatpages import FlatPages, pygments_style_defs
from flask_frozen import Freezer
import os

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'
FLATPAGES_ROOT = 'content'
POST_DIR = 'posts'

REPO_NAME = '..'

def parent_dir(path):
    '''Return the parent of a directory.'''
    return os.path.abspath(os.path.join(path, os.pardir))

APP_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = APP_DIR
# In order to deploy to Github pages, you must build the static files to
# the project root
FREEZER_DESTINATION = PROJECT_ROOT + "/build"

#FREEZER_BASE_URL = "http://localhost/{0}".format(REPO_NAME)
FREEZER_BASE_URL = "http://localhost/../"
FREEZER_RELATIVE_URLS = True
# Since this is a repo page (not a Github user page),
# we need to set the BASE_URL to the correct url as per GH Pages' standards
#FREEZER_BASE_URL = "http://localhost/{0}".format(REPO_NAME)
FREEZER_REMOVE_EXTRA_FILES = False  # IMPORTANT: If this is True, all app files
                                    # will be deleted when you run the freezer




app = Flask(__name__)
flatpages = FlatPages(app)
freezer = Freezer(app)
app.config.from_object(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about/')
def about():
    return render_template('about.html')

@app.route('/hire/')
def resume():
    return render_template('resume.html')

@app.route('/projects/')
def projects():
    return render_template('projects.html')

    
@app.route("/posts/")
def posts():
    posts = [p for p in flatpages if p.path.startswith(POST_DIR)] 
    posts.sort(key=lambda item:item['date'], reverse=False) # sort by date
    return render_template('posts.html',posts=posts)

@app.route('/posts/<name>/')
def post(name):
    path = '{}/{}'.format(POST_DIR,name)
    post = flatpages.get_or_404(path)
    return render_template('post.html',post=post)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(host = '0.0.0.0',debug = True)