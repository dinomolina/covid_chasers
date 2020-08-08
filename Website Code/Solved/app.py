import os

is_heroku = False
if 'IS_HEROKU' in os.environ:
    is_heroku = True

import pandas as pd
import pymysql
from flask import Flask, url_for, redirect
from flask_bootstrap import Bootstrap
from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine
from config import remote_db_endpoint, remote_db_port
from config import remote_db_name, remote_db_user, remote_db_pwd

if is_heroku == False:
    from config import remote_db_endpoint, remote_db_port, remote_db_name, remote_db_user, remote_db_pwd
else:
    remote_db_endpoint = os.environ.get('remote_db_endpoint')
    remote_db_port = os.environ.get('remote_db_port')
    remote_db_name = os.environ.get('remote_db_name')
    remote_db_user = os.environ.get('remote_db_user')
    remote_db_pwd = os.environ.get('remote_db_pwd')

pymysql.install_as_MySQLdb()
engine = create_engine(f"mysql://{remote_db_user}:{remote_db_pwd}@{remote_db_endpoint}:{remote_db_port}/{remote_db_name}")

app = Flask(__name__)

def create_app():
    app = Flask(__name__)
    Bootstrap(app)
    return app

@app.route("/")
def home():
    # Render Home Page
    return render_template("graphs.html")

@app.route("/covid")
def covid():
    return render_template("Covid.html")

@app.route("/animations")
def animations():
    return render_template("animations.html")

@app.route("/about")
def about():
    return render_template("About.html")

@app.route("/state_averages")
def covid_state_averages():
    conn = engine.connect()
    query = '''
        SELECT
            *
        FROM
            avg_perday
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/cases_percapita")
def cases_percapita():
    conn = engine.connect()
    query = '''
        SELECT
            state,
            population,
            total_cases,
            cases_per_capita
        FROM
            cases_deaths_percapita
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/deaths_percapita")
def deaths_percapita():
    conn = engine.connect()
    query = '''
        SELECT
            state,
            population,
            total_deaths,
            deaths_per_capita
        FROM
            cases_deaths_percapita
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/cases_perday")
def cases_perday():
    conn = engine.connect()
    query = '''
        SELECT 
            date,
            sum(cases) as cases,
            sum(deaths) as deaths
        FROM cases_perday
            where date >= "2020-04-01"
            group by date
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Alabama")
def Alabama():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Alabama" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Alaska")
def Alaska():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Alaska" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Arizona")
def Arizona():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Arizona" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Arkansas")
def Arkansas():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Arkansas" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/California")
def California():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "California" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Colorado")
def Colorado():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Colorado" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Connecticut")
def Connecticut():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Connecticut" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Delaware")
def Delaware():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Delaware" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/District")
def District():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "District of Columbia" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Florida")
def Florida():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Florida" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Georgia")
def Georgia():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Georgia" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Guam")
def Guam():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Guam" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Hawaii")
def Hawaii():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Hawaii" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Idaho")
def Idaho():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Idaho" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Illinois")
def Illinois():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Illinois" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Indiana")
def Indiana():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Indiana" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Iowa")
def Iowa():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Iowa" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Kansas")
def Kansas():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Kansas" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Kentucky")
def Kentucky():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Kentucky" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Louisiana")
def Louisiana():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Louisiana" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Maine")
def Maine():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Maine" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Maryland")
def Maryland():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Maryland" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Massachusetts")
def Massachusetts():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Massachusetts" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Michigan")
def Michigan():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Michigan" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Minnesota")
def Minnesota():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Minnesota" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Mississippi")
def Mississippi():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Mississippi" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Missouri")
def Missouri():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Missouri" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Montana")
def Montana():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Montana" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Nebraska")
def Nebraska():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Nebraska" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Nevada")
def Nevada():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Nevada" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/New_Hampshire")
def New_Hampshire():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "New Hampshire" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/New_Jersey")
def New_Jersey():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "New Jersey" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/New_Mexico")
def New_Mexico():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "New Mexico" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/New_York")
def New_York():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "New York" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/North_Carolina")
def North_Carolina():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "North Carolina" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/North_Dakota")
def North_Dakota():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "North Dakota" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Northern_Mariana_Islands")
def Northern_Mariana_Islands():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Northern Mariana Islands" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Ohio")
def Ohio():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Ohio" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Oklahoma")
def Oklahoma():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Oklahoma" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Oregon")
def Oregon():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Oregon" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Pennsylvania")
def Pennsylvania():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Pennsylvania" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Puerto_Rico")
def Puerto_Rico():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Puerto Rico" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Rhode_Island")
def Rhode_Island():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Rhode Island" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/South_Carolina")
def South_Carolina():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "South_Carolina" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/South_Dakota")
def South_Dakota():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "South_Dakota" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Tennessee")
def Tennessee():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Tennessee" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Texas")
def Texas():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Texas" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Utah")
def Utah():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Utah" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Vermont")
def Vermont():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Vermont" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Virgin_Islands")
def Virgin_Islands():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Virgin Islands" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Virginia")
def Virginia():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Virginia" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Washington")
def Washington():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Washington" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/West_Virginia")
def West_Virginia():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "West_Virginia" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Wisconsin")
def Wisconsin():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Wisconsin" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/Wyoming")
def Wyoming():
    conn = engine.connect()
    query = '''
        select *
        From cases_perday
        where 
            state = "Wyoming" and 
            date >= "2020-04-01";
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

if __name__ == '__main__':
    app.run(debug=True)