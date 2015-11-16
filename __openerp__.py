{
    'name': "url widget",
    'version': '1.0',
    'depends': ['base'],
    'author': "Author Name",
    'category': 'Category',
    'description': """
    Description text
    """,
    # data files always loaded at installation
    'data': [
        'data/url_widget.xml',
    ],
    'qweb': ['static/src/xml/*.xml'],
}